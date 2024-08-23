import { ExpensesValues, RevenueValues } from "../utils/valueSelector.js"
import { updateMessage, updateMessageTable } from "../functions/message.js"
import { logger } from "../utils/winston.js"
import { tableForm } from "../utils/tables.js"
import { saveToRows } from "../database/rowsdb.js"
import { getRedis } from "../utils/cache.js"

export const bootstrap = (app) => {
  //when a table is selected for expenses or revenue
  app.action("table_select", async ({ ack, body, context }) => {
    await ack()
    const channelId = body.container.channel_id
    const messageTs = body.container.message_ts
    const token = context.botToken
    try {
      const selected_value = body.actions[0].selected_option.value
      const [selected_table, rediskey] = selected_value.split("|")
      const values = JSON.parse(await getRedis(rediskey))
      if (selected_table) {
        await updateMessageTable(app, values, token, channelId, messageTs, selected_table, rediskey)
      }
    } catch (error) {
      logger.log("error", new Error(error.message))
    }
  })

  //when the save button is clicked
  app.action("save_clicked", async ({ action, ack, body, context }) => {
    await ack()
    const channelId = body.channel.id
    const messageTs = body.message.ts
    const values = JSON.parse(action.value)
    const { typeTransact, table } = values

    try {
      const result = await app.client.views.open({
        token: context.botToken,
        trigger_id: body.trigger_id,
        // View payload
        view: {
          type: "modal",
          callback_id: `view_${typeTransact}`,
          title: {
            type: "plain_text",
            text: `Save ${typeTransact}`,
          },
          submit: {
            type: "plain_text",
            text: "Submit",
          },
          private_metadata: JSON.stringify({
            values: action.value,
            channelId: channelId,
            messageTs: messageTs,
            token: context.botToken,
          }),
          blocks: tableForm(table),
        },
      })
      logger.log("info", `View displayed`)
    } catch (error) {
      logger.log("error", new Error(error.message))
    }
  })

  //view for Revenue
  app.view("view_Revenue", async ({ ack, view }) => {
    await ack()
    const metadata = JSON.parse(view.private_metadata)
    const { values, channelId, messageTs, token } = metadata
    const valuesParsed = JSON.parse(values)
    const { table, amountUSD, redisKey, scanLink } = valuesParsed
    const toSave = RevenueValues(table, view.state.values, { amountUSD, scanLink })
    logger.log("info", `Revenue saved in ${table}`)

    if (!Object.values(toSave).includes(null) && table) {
      const statusCode = await saveToRows(toSave, table, redisKey)
      if (statusCode === 202) {
        await updateMessage(app, valuesParsed, token, channelId, messageTs)
      }
    }
  })

  //view for expenses
  app.view("view_Expenses", async ({ ack, view }) => {
    await ack()
    const metadata = JSON.parse(view.private_metadata)
    const { values, channelId, messageTs, token } = metadata
    const valuesParsed = JSON.parse(values)
    const { amountUSD, table, gasUSD, redisKey, scanLink } = valuesParsed
    const toSave = ExpensesValues(table, view.state.values, { amountUSD, gasUSD, scanLink })
    logger.log("info", `Revenue saved in ${table}`)

    if (!Object.values(toSave).includes(null) && table) {
      const statusCode = await saveToRows(toSave, table, redisKey)
      if (statusCode === 202) {
        await updateMessage(app, valuesParsed, token, channelId, messageTs)
      }
    }
  })

  app.action("staff_select", async ({ ack }) => {
    await ack()
  })

  app.action("stack_select", async ({ ack }) => {
    await ack()
  })

  app.action("renewal_select", async ({ ack }) => {
    await ack()
  })

  app.action("asset_type", async ({ ack }) => {
    await ack()
  })

  app.action("ppe_type", async ({ ack }) => {
    await ack()
  })

  app.action("ppe_category", async ({ ack }) => {
    await ack()
  })

  app.action("renewal_select", async ({ ack }) => {
    await ack()
  })
}
