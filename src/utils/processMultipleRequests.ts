// function<T>(parameter: <T>) => 叫用函式時丟入什麼型別那麼 typescript 就會動態地推導出該型別
export const processMultipleRequests = async <T>(promises: Promise<T>[]) => {
  return await Promise.all(promises)
}
