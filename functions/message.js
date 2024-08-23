import { handleMessageUpdate, handleTableUpdate } from "../utils/handleMessageUpdate.js"
import { logger } from "../utils/winston.js"
export async function updateMessage(app, values, token, channelId, messageTs) {
  const {
    typeTransact,
    type,
    tokenName,
    amountUSD,
    displayTokenAmount,
    gasUSD,
    gasETH,
    scanLink,
    walletLink,
  } = values
  try {
    const replaceResult = await app.client.chat.update({
      token: token,
      channel: channelId,
      ts: messageTs,
      text: "Done",
      blocks: handleMessageUpdate(
        typeTransact,
        type,
        tokenName,
        amountUSD,
        displayTokenAmount,
        gasUSD,
        gasETH,
        scanLink,
        walletLink,
      ),
    })
    return replaceResult
  } catch (error) {
    logger.log("error", new Error(error.message))
  }
}

export async function updateMessageTable(
  app,
  values,
  token,
  channelId,
  messageTs,
  selected_table,
  redisKey,
) {
  try {
    const replaceResult = await app.client.chat.update({
      token: token,
      channel: channelId,
      ts: messageTs,
      text: "Done",
      blocks: handleTableUpdate(values, redisKey, selected_table),
    })
    return replaceResult
  } catch (error) {
    logger.log("error", new Error(error.message))
  }
}
