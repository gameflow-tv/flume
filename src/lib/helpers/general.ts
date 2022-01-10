// TODO: Write tests for this function
export const isNullOrUndefined = (value: any) => {
  return value === undefined || value === null || typeof value === 'undefined'
}

// TODO: Write tests for this function
export const isEmpty = (value: any) => {
  return isNullOrUndefined(value) || value.trim().length === 0
}
