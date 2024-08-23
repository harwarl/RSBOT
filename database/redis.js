import { createClient } from "redis"
import { logger } from "../utils/winston.js"
import "dotenv/config"

const REDIS_PASS = process.env.REDIS_PASS
const REDIS_HOST = process.env.REDIS_HOST
const REDIS_PORT = process.env.REDIS_PORT

export const client = await createClient({
  password: REDIS_PASS,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
})
  .on("error", (error) => {
    console.log(error.message)
    logger.log("error", new Error(error.message))
  })
  .connect()
