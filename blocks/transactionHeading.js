export const transactionHeading = (typeTransact) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "`" + `${typeTransact}` + "`",
    },
  }
}
