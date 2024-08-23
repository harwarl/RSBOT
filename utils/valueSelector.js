import { staffName } from "../data/staff.js"

export const RevenueValues = (tableType, viewValues, extras) => {
  let toReturn,
    s_amount = "$"
  const { amountUSD, scanLink } = extras
  s_amount = s_amount + amountUSD
  if (tableType === "O_R") {
    const transactionDetails = viewValues.revenue_input_identifier["details_input"].value
    toReturn = { transactionDetails, s_amount, scanLink }
  } else if (tableType === "SS") {
    const client = viewValues.sales_client_identifier["sales_client_input"].value
    const details = viewValues.sales_details_identifier["sales_details"].value
    toReturn = { client, details, s_amount, scanLink }
  } else if (tableType === "P_S") {
    const client = viewValues.ps_client_identifier["ps_client_input"].value
    const details = viewValues.ps_details_identifier["ps_details"].value
    toReturn = { client, details, s_amount, scanLink }
  } else if (tableType === "A_S") {
    const type = viewValues.as_type_identifier["asset_type"].selected_option.value
    const serialNo = viewValues.as_serial_identifier["asset_serial_no"].value
    toReturn = { type, serialNo, s_amount, scanLink }
  }
  return toReturn
}

export const ExpensesValues = (tableType, viewValues, extras) => {
  let toReturn,
    s_amount = "$"
  const { amountUSD, gasUSD, scanLink } = extras
  s_amount = s_amount + amountUSD
  if (tableType === "S_P") {
    const staff_name = viewValues.sp_staff_identifier["staff_select"].selected_user
    const staff_stack = viewValues.sp_stack_identifier["stack_select"].selected_option.value
    const details = viewValues.sp_details_identifier["payroll_description"].value
    toReturn = {
      staff_name: staffName[staff_name],
      staff_stack,
      details,
      s_amount,
      gasUSD,
      scanLink,
    }
  } else if (tableType === "SCS") {
    const service = viewValues.scs_service_identifier["service_select"].value
    const billing = viewValues.scs_billing_identifier["billing_select"].value
    const renewal_date = viewValues.scs_date_identifier["renewal_select"].selected_date
    toReturn = { service, billing, s_amount, renewal_date, gasUSD, scanLink }
  } else if (tableType === "PP_E") {
    const type = viewValues.ppe_type_identifier["ppe_type"].selected_option.value
    const details = viewValues.ppe_details_identifier["ppe_details"].value
    const category = viewValues.ppe_category_identifier["ppe_category"].selected_option.value
    toReturn = { type, details, category, s_amount, gasUSD, scanLink }
  } else if (tableType === "GAE") {
    const type = viewValues.gae_type_identifier["gae_type_select"].selected_option.value
    const category = viewValues.gae_category_identifier["gae_category_select"].selected_option.value
    const description = viewValues.gae_description_identifier["gae_description"].value
    toReturn = { type, description, category, s_amount, gasUSD, scanLink }
  } else if (tableType === "ASST") {
    const asset_type = viewValues.asst_select_identifier["asst_select_type"].selected_option.value
    const details = viewValues.asst_details_identifier["asst_details"].value
    const serialNo = viewValues.asst_serial_identifier["asst_serial_no"].value
    const invoiceNo = viewValues.asst_invoice_identifier["asst_invoice_no"].value
    const invoiceUrl = viewValues.asst_url_identifier["asst_invoice_url"].value
    toReturn = { asset_type, details, serialNo, invoiceNo, invoiceUrl, s_amount, gasUSD, scanLink }
  }

  return toReturn
}
