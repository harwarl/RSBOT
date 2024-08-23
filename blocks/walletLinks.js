export const walletLinks = (scanLink, walletLink, type, update) => {
  if (!update) {
    return {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `<${scanLink[type]}|View Transaction> | <${walletLink[type]}|View Wallet>`,
        },
      ],
    }
  } else {
    return {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `<${scanLink}|View Transaction> | <${walletLink}|View Wallet>`,
        },
      ],
    }
  }
}
