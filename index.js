import { Web3 } from "web3"
import { env } from "process"
import pkg from "@slack/bolt"
import { bootstrap } from "./actions/index.js"
import { checkTransactions } from "./functions/blockchain.js"
import { binanceTokenContracts, ethereumTokenContracts } from "./data/contractAddress.js"
import dotenv from "dotenv"
import { logger } from "./utils/winston.js"
dotenv.config()

const PORT = process.env.PORT || 8085
const { App, LogLevel } = pkg
const app = new App({
  token: env.SLACKTOKEN,
  signingSecret: env.SIGNINGSECRET,
  LogLevel: LogLevel.ERROR,
})

bootstrap(app)

app
  .start(PORT)
  .then(() => {
    console.log(`App is running on PORT ${PORT}`)
  })
  .catch((error) => {
    logger.log("error", new Error(error.message))
    console.log(error.message)
  })

const bscDataSeed = env.BSC_MAIN_SEED
const ethDataSeed = env.ETH_MAIN_SEED

//using web3Js
const ethereumWeb3 = new Web3(new Web3.providers.HttpProvider(ethDataSeed))

const binanceWeb3 = new Web3(new Web3.providers.HttpProvider(bscDataSeed))

let lastBlockNumberEthereum = 0
let lastBlockNumberBinance = 0

setInterval(async () => {
  try {
    lastBlockNumberEthereum = await checkTransactions(
      ethereumWeb3,
      ethereumTokenContracts,
      lastBlockNumberEthereum,
      "ETH",
    )
    lastBlockNumberBinance = await checkTransactions(
      binanceWeb3,
      binanceTokenContracts,
      lastBlockNumberBinance,
      "BNB",
    )
  } catch (error) {
    logger.log("error", error.message)
  }
}, 2 * 1000)
