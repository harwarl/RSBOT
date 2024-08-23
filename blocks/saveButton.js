export const saveButton = (values) => {
  const parsedValues = JSON.stringify(values)
  return {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "SAVE",
          emoji: true,
        },
        style: "primary",
        value: parsedValues,
        action_id: "save_clicked",
      },
    ],
  }
}
