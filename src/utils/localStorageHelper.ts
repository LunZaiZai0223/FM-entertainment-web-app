type LocalStorageKeys = 'MY_FAVORITE_TV_SERIES' | 'MY_FAVORITE_MOVIES'

const getLocalStorageItemByKey = (key: LocalStorageKeys) => {
  const targetValue = localStorage.getItem(key)

  if (!targetValue) return null

  return JSON.parse(targetValue)
}

const setLocalStorageItemByKey = (key: LocalStorageKeys, value: any) => {
  const shouldBeConvertedToString = typeof value === 'object'
  localStorage.setItem(key, shouldBeConvertedToString ? JSON.stringify(value) : value)
}

const LocalStorageHelper = {
  getLocalStorageItemByKey,
  setLocalStorageItemByKey,
}

export default LocalStorageHelper
