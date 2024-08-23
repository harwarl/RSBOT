import { handleComma } from "../utils/handleComma.js"
export const displayAmount = (
  amountUSD,
  displayTokenAmount,
  tokenName,
  typeTransact,
  gasUSD,
  gasETH,
  type,
) => {
  if (typeTransact === "Revenue") {
    return {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text:
            "*Amount:*\n " +
            "+" +
            `$${handleComma(amountUSD)} -  (${displayTokenAmount} ${
              tokenName === "ETH" ? "Ξ" : tokenName
            }) 💰`,
        },
      ],
    }
  } else if (typeTransact === "Expenses") {
    return {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text:
            "*Amount:*\n " +
            `- $${handleComma(amountUSD)} -  (${displayTokenAmount} ${
              tokenName === "ETH" ? "Ξ" : tokenName
            })`,
        },
        {
          type: "mrkdwn",
          text: "*Gas:*\n" + `- $${gasUSD} - (${gasETH} ${type === "ETH" ? "Ξ" : "BNB"})`,
        },
      ],
    }
  }
}
