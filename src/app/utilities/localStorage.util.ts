export const getLocalStorage = (key: string) => {
  const getLocalData = localStorage.getItem(key)
  return getLocalData !== null ? JSON.parse(getLocalData) : []
}

export const setLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data))
}
