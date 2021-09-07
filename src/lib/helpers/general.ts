export const isNullOrUndefined = (value: any) => {
  return value === undefined || value === null
}

export const isEmpty = (value: any) => {
  return value === undefined || value === null || value.trim().length === 0
}
