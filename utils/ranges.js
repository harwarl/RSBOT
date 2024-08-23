export const tableRanges = (tableType) => {
  const tableRange = {
    S_P: "A:G",
    SCS: "A:G",
    PP_E: "A:G",
    GAE: "A:G",
    ASST: "A:I",
    O_R: "A:D",
    SS: "A:E",
    P_S: "A:E",
    A_S: "A:E",
  }
  return tableRange[tableType]
}
