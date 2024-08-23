export const operating_revenue = [
  {
    type: "input",
    block_id: "revenue_input_identifier",
    element: {
      type: "plain_text_input",
      action_id: "details_input",
    },
    label: {
      type: "plain_text",
      text: "Details",
      emoji: true,
    },
  },
]
export const sales = [
  {
    type: "input",
    block_id: "sales_client_identifier",
    element: {
      type: "plain_text_input",
      action_id: "sales_client_input",
    },
    label: {
      type: "plain_text",
      text: "Client/Project",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "sales_details_identifier",
    element: {
      type: "plain_text_input",
      multiline: true,
      action_id: "sales_details",
    },
    label: {
      type: "plain_text",
      text: "Transaction Details",
      emoji: true,
    },
  },
]
export const professional_services = [
  {
    type: "input",
    block_id: "ps_client_identifier",
    element: {
      type: "plain_text_input",
      action_id: "ps_client_input",
    },
    label: {
      type: "plain_text",
      text: "Client/Project",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "ps_details_identifier",
    element: {
      type: "plain_text_input",
      multiline: true,
      action_id: "ps_details",
    },
    label: {
      type: "plain_text",
      text: "Transaction Details",
      emoji: true,
    },
  },
]
export const asset_sales = [
  {
    type: "input",
    block_id: "as_type_identifier",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select Type",
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Device",
            emoji: true,
          },
          value: "Device",
        },
        {
          text: {
            type: "plain_text",
            text: "Property",
            emoji: true,
          },
          value: "Property",
        },
      ],
      action_id: "asset_type",
    },
    label: {
      type: "plain_text",
      text: "Type",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "as_serial_identifier",
    element: {
      type: "plain_text_input",
      action_id: "asset_serial_no",
    },
    label: {
      type: "plain_text",
      text: "Serial No",
      emoji: true,
    },
  },
]
