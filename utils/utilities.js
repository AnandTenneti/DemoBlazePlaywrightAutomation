export function toNumber(value) {
  if (typeof value === 'number') return value
  if (typeof value !== 'string') throw new Error('Value must be a string or number')

  // Remove non-numeric characters (like $, commas, spaces)
  const numericValue = value.replace(/[^0-9.-]/g, '')

  const result = Number(numericValue)
  if (isNaN(result)) throw new Error(`Cannot convert "${value}" to a number`)

  return result
}