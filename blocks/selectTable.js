import { tableNames } from "../utils/tables.js"
export const revenueTableSelector = (values, table) => {
  const display = table ? tableNames(table) : "Select a table"
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Revenue Tables",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: display,
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Operating Revenue",
            emoji: true,
          },
          value: `O_R|${values}`, //OperatingRevenue
        },
        {
          text: {
            type: "plain_text",
            text: "Sales",
            emoji: true,
          },
          value: `SS|${values}`, //sales
        },
        {
          text: {
            type: "plain_text",
            text: "Professional Services",
            emoji: true,
          },
          value: `P_S|${values}`, //prefessional Services
        },
        {
          text: {
            type: "plain_text",
            text: "Asset Sales",
            emoji: true,
          },
          value: `A_S|${values}`,
        },
      ],
      action_id: "table_select",
    },
  }
}

export const expensesTableSelector = (values, table) => {
  const display = table ? tableNames(table) : "Select a table"
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Expenses Tables",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: display,
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Staff Payroll",
            emoji: true,
          },
          value: `S_P|${values}`,
        },
        {
          text: {
            type: "plain_text",
            text: "Subscriptions",
            emoji: true,
          },
          value: `SCS|${values}`,
        },
        {
          text: {
            type: "plain_text",
            text: "PP&E",
            emoji: true,
          },
          value: `PP_E|${values}`,
        },
        {
          text: {
            type: "plain_text",
            text: "General Administrative Expenses",
            emoji: true,
          },
          value: `GAE|${values}`,
        },
        // {
        //   text: {
        //     type: "plain_text",
        //     text: "Assets",
        //     emoji: true,
        //   },
        //   value: `ASST|${values}`,
        // },
      ],
      action_id: "table_select",
    },
  }
}
