import axios from "axios"
import { handleDate } from "../utils/handleDate.js"
import { tableRanges } from "../utils/ranges.js"
import { logger } from "../utils/winston.js"
import { env } from "process"
import { client } from "./redis.js"
import dotenv from "dotenv"
dotenv.config()

const TablesId = {
  O_R: process.env.REVENUE_OPERATING,
  SS: process.env.REVENUE_SALES,
  P_S: process.env.REVENUE_PROFESSIONAL_S,
  A_S: process.env.REVENUE_ASSET_SALES,
  S_P: process.env.EXPENSES_STAFF_PAYROLL,
  SCS: process.env.EXPENSES_SUBSCRIPTIONS,
  PP_E: process.env.EXPENSES_PPE,
  GAE: process.env.EXPENSES_GAE,
  ASST: process.env.EXPENSE_ASSET,
}

export async function saveToRows(dbValues, tableType, redisKey) {
  const date = handleDate().split("-")[1]
  let table_Id
  let range
  let values = [date]
  range = tableRanges(tableType)
  table_Id = TablesId[tableType]
  values = [...values, ...Object.values(dbValues)]

  const url = `https://api.rows.com/v1beta1/spreadsheets/${env.SPREADSHEET_ID}/tables/${table_Id}/values/${range}:append`
  try {
    const response = await axios.post(
      url,
      {
        values: [values],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.ROWS_API_KEY}`,
        },
      },
    )
    if (response.status) {
      const res = await client.del(redisKey)
      if (res === 1) {
        logger.log("info", "Key deleted successfully")
      }
      return response.status
    }
  } catch (error) {
    logger.log("error", new Error(error.message))
  }
}
