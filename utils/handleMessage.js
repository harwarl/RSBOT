import { displayAmount } from "../blocks/displayAmount.js"
import { displayDate } from "../blocks/displayDate.js"
import { divider } from "../blocks/divider.js"
import { expensesTableSelector, revenueTableSelector } from "../blocks/selectTable.js"
import { transactionHeading } from "../blocks/transactionHeading.js"
import { walletLinks } from "../blocks/walletLinks.js"
import { saveRedis } from "./cache.js"

//first message to be display
export async function handleMessage(
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
) {
  const walletLink = {
    ETH: etherWalletLink,
    BNB: bscWalletLink,
  }

  const scanLink = {
    ETH: etherScanLink,
    BNB: bscScanLink,
  }

  const _ = {
    typeTransact: typeTransact,
    type: type,
    tokenName: tokenName,
    amountUSD: amountUSD,
    displayTokenAmount: displayTokenAmount,
    gasUSD: gasUSD,
    gasETH: gasETH,
    scanLink: scanLink[type],
    walletLink: walletLink[type],
  }

  const values = JSON.stringify(_)
  let redisKey = await saveRedis(values)

  const messageType = {
    Revenue: [
      //should contain revenue info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact),
      displayDate,
      revenueTableSelector(redisKey),
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "SAVE",
          "emoji": true
        }
      },
      walletLinks(scanLink, walletLink, type),
      divider,
    ],
    Expenses: [
      //should contain expenses info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact, gasUSD, gasETH, type),
      displayDate,
      expensesTableSelector(redisKey),
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "SAVE",
          "emoji": true
        }
      },
      walletLinks(scanLink, walletLink, type),
      divider,
    ],
  }
  return messageType[typeTransact]
}
