import { handleDate } from "../utils/handleDate.js"
export const displayDate = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "*Timestamp:*\n" + `${handleDate()}`,
  },
}
