export function handleComma(amount) {
  return amount.toString().replace(/\B(?=(\d{3})(?!\d))/g, ",")
}
