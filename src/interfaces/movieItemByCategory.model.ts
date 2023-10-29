export interface MovieItemByCategoryModel {
  /** 是否為成人 */
  adult: boolean
  /** 背景圖片路徑 */
  backdrop_path?: string
  /** 電影類型的ID列表 */
  genre_ids: number[]
  /** 電影ID */
  id: number
  /** 原始語言 */
  original_language: string
  /** 原始標題 */
  original_title: string
  /** 劇情簡介 */
  overview: string
  /** 流行度 */
  popularity: number
  /** 海報圖片路徑 */
  poster_path?: string
  /** 上映日期 */
  release_date: string
  /** 電影標題 */
  title: string
  /** 是否有影片預告片 */
  video: boolean
  /** 平均評分 */
  vote_average: number
  /** 評分數量 */
  vote_count: number
}
