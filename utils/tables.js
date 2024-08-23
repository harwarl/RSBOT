import { generalAE, staff_payroll, pp_e, subscriptions, assets } from "../tables/expenses.js"
import { operating_revenue, sales, professional_services, asset_sales } from "../tables/revenue.js"

export const tableForm = (table_name) => {
  const tablesForm = {
    S_P: staff_payroll,
    SCS: subscriptions,
    PP_E: pp_e,
    GAE: generalAE,
    O_R: operating_revenue,
    SS: sales,
    P_S: professional_services,
    A_S: asset_sales,
    ASST: assets,
  }
  return tablesForm[table_name]
}

export const tableNames = (table_name) => {
  const tablesNames = {
    S_P: "Staff Payroll",
    SCS: "Subscriptions",
    PP_E: "PP_E",
    GAE: "General Administrative Expenses",
    O_R: "Operating Revenue",
    SS: "Sales",
    P_S: "Professional Services",
    A_S: "Asset Sales",
    ASST: "Assets",
  }
  return tablesNames[table_name]
}
