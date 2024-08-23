export function displayForm(values) {
  const { typeTransact } = values
  const messageType = {
    Revenue: [
      {
        type: "input",
        block_id: "static_identifier",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Client Acquisation",
                emoji: true,
              },
              value: "Client Acquisation",
            },
            {
              text: {
                type: "plain_text",
                text: "Maintenance",
                emoji: true,
              },
              value: "Maintenance",
            },
            {
              text: {
                type: "plain_text",
                text: "Others",
                emoji: true,
              },
              value: "Others",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Label",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "invoice_identifier",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "InvoiceID",
          emoji: true,
        },
      },
    ],
    Expenses: [
      {
        type: "input",
        block_id: "static_identifier",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Subscription",
                emoji: true,
              },
              value: "Subscription",
            },
            {
              text: {
                type: "plain_text",
                text: "Payroll",
                emoji: true,
              },
              value: "Payroll",
            },
            {
              text: {
                type: "plain_text",
                text: "Miscellanous",
                emoji: true,
              },
              value: "Miscellanous",
            },
            {
              text: {
                type: "plain_text",
                text: "Others",
                emoji: true,
              },
              value: "Others",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Label",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "description_identifier",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Description",
          emoji: true,
        },
      },
      {
        type: "section",
        block_id: "user_identifier",
        text: {
          type: "mrkdwn",
          text: "Select User\n",
        },
        accessory: {
          type: "users_select",
          placeholder: {
            type: "plain_text",
            text: "Select a user",
            emoji: true,
          },
          action_id: "users_select-action",
        },
      },
    ],
  }
  return messageType[typeTransact]
}
