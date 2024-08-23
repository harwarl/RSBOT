export const generalAE = [
  {
    type: "input",
    block_id: "gae_type_identifier",
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
            text: "Technology Cost",
            emoji: true,
          },
          value: "Technology Cost",
        },
        {
          text: {
            type: "plain_text",
            text: "Professional Fees",
            emoji: true,
          },
          value: "Professional Fees",
        },
        {
          text: {
            type: "plain_text",
            text: "Travel",
            emoji: true,
          },
          value: "Travel",
        },
        {
          text: {
            type: "plain_text",
            text: "Entertainment",
            emoji: true,
          },
          value: "Entertainment",
        },
      ],
      action_id: "gae_type_select",
    },
    label: {
      type: "plain_text",
      text: "Type",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "gae_category_identifier",
    element: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select Category",
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Overhead Cost",
            emoji: true,
          },
          value: "Overhead Cost",
        },
        {
          text: {
            type: "plain_text",
            text: "Salaries",
            emoji: true,
          },
          value: "Salaries",
        },
        {
          text: {
            type: "plain_text",
            text: "Office Supplies",
            emoji: true,
          },
          value: "Office Supplies",
        },
        {
          text: {
            type: "plain_text",
            text: "Technology Cost",
            emoji: true,
          },
          value: "Technology Cost",
        },
        {
          text: {
            type: "plain_text",
            text: "Professional Fees",
            emoji: true,
          },
          value: "Professional Fees",
        },
        {
          text: {
            type: "plain_text",
            text: "Insurance",
            emoji: true,
          },
          value: "Insurance",
        },
        {
          text: {
            type: "plain_text",
            text: "Taxes and Licenses",
            emoji: true,
          },
          value: "Taxes and Licenses",
        },
      ],
      action_id: "gae_category_select",
    },
    label: {
      type: "plain_text",
      text: "Category",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "gae_description_identifier",
    element: {
      type: "plain_text_input",
      action_id: "gae_description",
    },
    label: {
      type: "plain_text",
      text: "Description",
      emoji: true,
    },
  },
]
export const staff_payroll = [
  {
    type: "section",
    block_id: "sp_staff_identifier",
    text: {
      type: "mrkdwn",
      text: "Staff Name",
    },
    accessory: {
      type: "users_select",
      placeholder: {
        type: "plain_text",
        text: "Select Staff",
        emoji: true,
      },
      action_id: "staff_select",
    },
  },
  {
    type: "section",
    block_id: "sp_stack_identifier",
    text: {
      type: "mrkdwn",
      text: "Staff Stack",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select Stack",
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Frontend",
            emoji: true,
          },
          value: "Frontend",
        },
        {
          text: {
            type: "plain_text",
            text: "Backend",
            emoji: true,
          },
          value: "Backend",
        },
        {
          text: {
            type: "plain_text",
            text: "UI/UX",
            emoji: true,
          },
          value: "UI/UX",
        },
        {
          text: {
            type: "plain_text",
            text: "Blockchain",
            emoji: true,
          },
          value: "Blockchain",
        },
      ],
      action_id: "stack_select",
    },
  },
  {
    type: "input",
    block_id: "sp_details_identifier",
    element: {
      type: "plain_text_input",
      multiline: true,
      action_id: "payroll_description",
    },
    label: {
      type: "plain_text",
      text: "Description",
      emoji: true,
    },
  },
]
export const pp_e = [
  {
    type: "section",
    block_id: "ppe_type_identifier",
    text: {
      type: "mrkdwn",
      text: "PP&E Type",
    },
    accessory: {
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
            text: "Land",
            emoji: true,
          },
          value: "Land",
        },
        {
          text: {
            type: "plain_text",
            text: "Building",
            emoji: true,
          },
          value: "Building",
        },
        {
          text: {
            type: "plain_text",
            text: "Vehicles",
            emoji: true,
          },
          value: "Vehicles",
        },
        {
          text: {
            type: "plain_text",
            text: "Office Equipment",
            emoji: true,
          },
          value: "Office Equipment",
        },
        {
          text: {
            type: "plain_text",
            text: "Furniture",
            emoji: true,
          },
          value: "Furniture",
        },
        {
          text: {
            type: "plain_text",
            text: "Leasehold Equipment",
            emoji: true,
          },
          value: "Leasehold Equipment",
        },
      ],
      action_id: "ppe_type",
    },
  },
  {
    type: "section",
    block_id: "ppe_category_identifier",
    text: {
      type: "mrkdwn",
      text: "Category",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select Category",
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
            text: "Land",
            emoji: true,
          },
          value: "Land",
        },
        {
          text: {
            type: "plain_text",
            text: "Building",
            emoji: true,
          },
          value: "Building",
        },
        {
          text: {
            type: "plain_text",
            text: "Vehicles",
            emoji: true,
          },
          value: "Vehicles",
        },
        {
          text: {
            type: "plain_text",
            text: "Office Equipment",
            emoji: true,
          },
          value: "Office Equipment",
        },
        {
          text: {
            type: "plain_text",
            text: "Construction In Progress",
            emoji: true,
          },
          value: "Construction In Progress",
        },
        {
          text: {
            type: "plain_text",
            text: "Leasehold Equipment",
            emoji: true,
          },
          value: "Leasehold Equipment",
        },

      ],
      action_id: "ppe_category",
    },
  },
  {
    type: "input",
    block_id: "ppe_details_identifier",
    element: {
      type: "plain_text_input",
      action_id: "ppe_details",
    },
    label: {
      type: "plain_text",
      text: "Details",
      emoji: true,
    },
  },
]
export const subscriptions = [
  {
    type: "input",
    block_id: "scs_service_identifier",
    element: {
      type: "plain_text_input",
      action_id: "service_select",
    },
    label: {
      type: "plain_text",
      text: "Service",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "scs_billing_identifier",
    element: {
      type: "plain_text_input",
      action_id: "billing_select",
    },
    label: {
      type: "plain_text",
      text: "Billing",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "scs_date_identifier",
    element: {
      type: "datepicker",
      initial_date: "2022-10-12",
      placeholder: {
        type: "plain_text",
        text: "Select a date",
        emoji: true,
      },
      action_id: "renewal_select",
    },
    label: {
      type: "plain_text",
      text: "Renewal Date",
      emoji: true,
    },
  },
]
export const assets = [
  {
    type: "section",
    block_id: "asst_select_identifier",
    text: {
      type: "mrkdwn",
      text: "Type",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select type",
        emoji: true,
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Device",
            emoji: true,
          },
          value: "device",
        },
      ],
      action_id: "asst_select_type",
    },
  },
  {
    type: "input",
    block_id: "asst_details_identifier",
    element: {
      type: "plain_text_input",
      action_id: "asst_details",
    },
    label: {
      type: "plain_text",
      text: "Details",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "asst_serial_identifier",
    element: {
      type: "plain_text_input",
      action_id: "asst_serial_no",
    },
    label: {
      type: "plain_text",
      text: "Serial No",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "asst_invoice_identifier",
    element: {
      type: "plain_text_input",
      action_id: "asst_invoice_no",
    },
    label: {
      type: "plain_text",
      text: "Invoice No",
      emoji: true,
    },
  },
  {
    type: "input",
    block_id: "asst_url_identifier",
    element: {
      type: "plain_text_input",
      action_id: "asst_invoice_url",
    },
    label: {
      type: "plain_text",
      text: "Invoice URL",
      emoji: true,
    },
  },
]
