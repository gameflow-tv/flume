export const isNullOrUndefined = (value: any) => {
  return value === undefined || value === null || typeof value === 'undefined'
}

export const isEmpty = (value: any) => {
  return isNullOrUndefined(value) || value.trim().length === 0
}

export default { isNullOrUndefined, isEmpty }
