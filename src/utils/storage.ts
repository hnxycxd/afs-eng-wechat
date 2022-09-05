interface ISetStorage<T> {
  key: string
  value: T
  type?: 'sessionStorage' | 'localStorage'
}
interface IGetStorage {
  key: string
  type?: 'sessionStorage' | 'localStorage'
}

/**
 * 存储Storage
 */
export const setStorage = <T>(params: ISetStorage<T>) => {
  const type = params?.type || 'sessionStorage'
  const obj = {
    dataType: typeof (params.value),
    value: params.value,
    type: params.type,
    datetime: new Date().getTime(),
  }
  window[type].setItem(params.key, JSON.stringify(obj))
}

/**
 * 获取Storage
 */
export const getStorage = (params: IGetStorage) => {
  const type = params?.type || 'sessionStorage'
  let value: null | string | Record<string, any> = window[type].getItem(params.key)
  if (value === null)
    value = window.localStorage.getItem(params.key)
  if (value !== null)
    value = JSON.parse(value).value

  return value
}

/**
 * 删除Storage
 */
export const removeStorage = (params: IGetStorage) => {
  const { type, key } = params
  if (type) {
    window[type].removeItem(key)
    return
  }

  window.sessionStorage.removeItem(key)
  window.localStorage.removeItem(key)
  console.warn(`${key} in both sessionStorage and localStorage has been removed because the type is not specified`)
}

