import axios from "axios"
import { WebClient } from "@slack/web-api"
import { env } from "process"
import { logger } from "../utils/winston.js"
import { handleMessage } from "../utils/handleMessage.js"
import dotenv from "dotenv"
dotenv.config()

const slackClient = new WebClient(env.SLACKTOKEN)

const refineAddress = env.REFINEADDRESS
const coinMarketCap = "https://pro-api.coinmarketcap.com/v2/tools/price-conversion"
const ETH_API_KEY = env.ETH_API_KEY
const BSC_API_KEY = env.BSC_API_KEY
const transferMethodIdentifier = "0xa9059cbb"
const slackExpenseChannel = process.env.EXPENSE_CHANNEL
const slackRevenueChannel = process.env.REVENUE_CHANNEL

//Handles the conversion for each token
async function handleToken(token, type, tokenName) {
  let adjustedToken
  if (type === "ETH") {
    adjustedToken = token / 1e6
  } else if (type === "BNB") {
    adjustedToken = token / 1e18
  }
  return adjustedToken
}

//get the usd price of the token sent.
async function getUSDPrice(tokenAmount, coin) {
  let coinAmount = Math.round(tokenAmount * 10000000) / 10000000
  try {
    const resp = axios.get(coinMarketCap, {
      params: {
        amount: coinAmount,
        symbol: coin,
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": env.COINMARKETCAP,
      },
    })
    let data = (await resp).data.data[0].quote["USD"].price
    data = Math.round(data * 100) / 100
    return data
  } catch (error) {
    logger.log("error", new Error(error.message))
  }
}

//gets the Ether value from wei
async function getEther(weiValue, web3) {
  let amountEth = web3.utils.fromWei(weiValue.toString(), "ether")
  amountEth = Math.round(amountEth * 100000) / 100000
  return amountEth
}

//calculates the gas fee
async function getGasFee(transactionHash, web3, type) {
  const transaction = await web3.eth.getTransaction(transactionHash)
  const receipt = await web3.eth.getTransactionReceipt(transactionHash)
  const gasFee = receipt.gasUsed * transaction.gasPrice
  const gasETH = await getEther(gasFee, web3)
  // const network = (type === 'ETH' ? 'ETH' : 'BNB');   //Should be adjusted
  const gasUSD = await getUSDPrice(gasETH, type)
  return { gasUSD, gasETH }
}

//function to handle transactions and sending of slack messages to channel
async function handleTransaction(tokenName, transaction, web3, type) {
  const inputData = transaction.input
  const encodedValues = "0x" + inputData.slice(10)
  const transfer = await web3.eth.abi.decodeParameters(["address", "uint256"], encodedValues)
  const tokenAmount = await handleToken(transfer[1].toString(), type, tokenName)
  const displayTokenAmount = Math.round(tokenAmount * 1e5) / 1e5
  const amountUSD = await getUSDPrice(tokenAmount, tokenName)
  const { gasUSD, gasETH } = await getGasFee(transaction.hash, web3, type)
  let typeTransact
  let involvedAddress
  let channel

  if (transaction?.to?.toLowerCase() === refineAddress.toLowerCase()) {
    typeTransact = "Revenue"
    involvedAddress = transaction.to
    channel = slackRevenueChannel
  } else if (transaction?.from?.toLowerCase() === refineAddress.toLowerCase()) {
    typeTransact = "Expenses"
    involvedAddress = transaction.from
    channel = slackExpenseChannel
  }

  if (typeTransact) {
    // const message = `${typeTransact} Value: ${transfer._value / 1e18} ${tokenName} Transaction detected: ${transaction.hash}`;
    const etherScanLink = `https://etherscan.io/tx/${transaction.hash}`
    const bscScanLink = `https://bscscan.com/tx/${transaction.hash}`
    const etherWalletLink = `https://etherscan.io/address/${refineAddress}`
    const bscWalletLink = `https://bscscan.com/address/${refineAddress}`
    await slackClient.chat.postMessage({
      channel: channel,
      text: `${typeTransact}`,

      blocks: await handleMessage(
        typeTransact,
        type,
        tokenName,
        amountUSD,
        displayTokenAmount,
        gasUSD,
        gasETH,
        etherScanLink,
        bscScanLink,
        etherWalletLink,
        bscWalletLink,
      ),
    })
  }
}

//Checking of blocks for transactions here
// export async function checkTransactions(web3, tokenContracts, lastBlockNumber, type) {
//   const currentBlockNumber = await web3.eth.getBlockNumber()
//   if (currentBlockNumber !== lastBlockNumber) {
//     let block = await web3.eth.getBlock(currentBlockNumber, true)
//     if (!block && block?.transactions?.length < 0) {
//       logger.log("error", new Error("Failed to fetch block, or block has no transactions"))
//     } else if (block && block?.transactions) {
//       for (let transaction of block.transactions) {
//         console.log(transaction)
//         let fromTransact = transaction.from
//         let toTransact = transaction.to
//         if (
//           tokenContracts[toTransact] &&
//           toTransact === refineAddress.toLowerCase() &&
//           transaction.input.startsWith(transferMethodIdentifier)
//         ) {
//           const tokenName = tokenContracts[toTransact]
//           await handleTransaction(tokenName, transaction, web3, type)
//         } else if (
//           tokenContracts[fromTransact] &&
//           fromTransact === refineAddress.toLowerCase() &&
//           transaction.input.startsWith(transferMethodIdentifier)
//         ) {
//           const tokenName = tokenContracts[fromTransact]
//           await handleTransaction(tokenName, transaction, web3, type)
//         }
//       }
//     }
//     lastBlockNumber = currentBlockNumber
//   }
//   return lastBlockNumber
// }

export async function checkTransactions(web3, tokenContracts, lastBlockNumber, type) {
  let url
  if (type === "ETH") {
    url = `https://api.etherscan.io/api?module=account&action=txlist&address=${refineAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETH_API_KEY}`
  } else if (type === "BNB") {
    url = `https://api.bscscan.com/api?module=account&action=txlist&address=${refineAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${BSC_API_KEY}`
  }
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.status === "1") {
      const transactions = data.result
      if (transactions.length === 0) {
        return
      }
      for (let transaction of transactions) {
        let fromTransact = txn.from
        let toTransact = txn.to

        if (tokenContracts[toTransact] && toTransact === refineAddress.toLowerCase()) {
          const tokenName = tokenContracts[toTransact]
          await handleTransaction(tokenName, transaction, web3, type)
        } else if (tokenContracts[fromTransact] && fromTransact === refineAddress.toLowerCase()) {
          const tokenName = tokenContracts[fromTransact]
          await handleTransaction(tokenName, transaction, web3, type)
        }
      }
    }
    return
  } catch (error) {
    console.log(error)
  }
}
