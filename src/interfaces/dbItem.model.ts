export interface DbItem {
  /** 是否為成人影片 */
  adult: boolean
  /** 背景圖片路徑 */
  backdrop_path: string
  /** 類型ID */
  genre_ids: number[]
  /** 電影ID */
  id: number
  /** 媒體類型 */
  media_type: string
  /** 原始語言 */
  original_language: string
  /** 原始標題 */
  original_title: string
  /** 概述 */
  overview: string
  /** 流行度 */
  popularity: number
  /** 海報圖片路徑 */
  poster_path: string
  /** 上映日期 */
  release_date: string
  /** 標題 */
  title: string
  /** 是否有影片 */
  video: boolean
  /** 平均評分 */
  vote_average: number
  /** 評分人數 */
  vote_count: number
}
