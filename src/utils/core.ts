// const isEmptyString = (data: string): boolean =>
//   typeof data === 'string' && data.trim().length === 0

type ValidTypes = string | number | undefined | null

export const isDef = <T extends ValidTypes>(value: T): boolean =>
  !!(
    value !== undefined &&
    value !== null &&
    !Number.isNaN(value) &&
    value !== ''
  )

// const isEmptyObject = (obj) => Object.keys(obj).length === 0

// const isEmptyArray = (array) => array === undefined || array.length === 0

// const isEmpty = (value) =>
//   (isObject(value) && isEmptyObject(value)) || !isDef(value) || value === ''
