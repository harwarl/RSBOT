import { displayAmount } from "../blocks/displayAmount.js"
import { displayDate } from "../blocks/displayDate.js"
import { saved } from "../blocks/saved.js"
import { expensesTableSelector, revenueTableSelector } from "../blocks/selectTable.js"
import { saveButton } from "../blocks/saveButton.js"
import { divider } from "../blocks/divider.js"
import { transactionHeading } from "../blocks/transactionHeading.js"
import { walletLinks } from "../blocks/walletLinks.js"

//message to be returned after view modal has been has been submitted
export function handleMessageUpdate(
  typeTransact,
  type,
  tokenName,
  amountUSD,
  displayTokenAmount,
  gasUSD,
  gasETH,
  scanLink,
  walletLink,
) {
  const messageType = {
    Revenue: [
      //should contain revenue info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact),
      displayDate,
      walletLinks(scanLink, walletLink, type, true),
      saved,
      divider,
    ],
    Expenses: [
      //should contain expenses info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact, gasUSD, gasETH, type),
      displayDate,
      walletLinks(scanLink, walletLink, type, true),
      saved,
      divider,
    ],
  }
  return messageType[typeTransact]
}

//message to be return after table has been selected
export const handleTableUpdate = (values, redisKey, selected_table) => {
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
  values["table"] = selected_table
  values["redisKey"] = redisKey
  const messageType = {
    Revenue: [
      //should contain revenue info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact),
      displayDate,
      revenueTableSelector(redisKey, selected_table),
      saveButton(values),
      walletLinks(scanLink, walletLink, type, true),
      divider,
    ],
    Expenses: [
      //should contain expenses info
      transactionHeading(typeTransact),
      displayAmount(amountUSD, displayTokenAmount, tokenName, typeTransact, gasUSD, gasETH, type),
      displayDate,
      expensesTableSelector(redisKey, selected_table),
      saveButton(values),
      walletLinks(scanLink, walletLink, type, true),
      divider,
    ],
  }
  return messageType[typeTransact]
}
