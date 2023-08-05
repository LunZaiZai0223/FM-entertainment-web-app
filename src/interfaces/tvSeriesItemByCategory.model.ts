export interface TvSeriesItemByCategoryModel {
  /** 背景圖片路徑 */
  backdrop_path: string | null
  /** 首播日期 */
  first_air_date: string
  /** 電視節目類型的ID列表 */
  genre_ids: number[]
  /** 電視節目ID */
  id: number
  /** 電視節目名稱 */
  name: string
  /** 產地國家 */
  origin_country: string[]
  /** 原始語言 */
  original_language: string
  /** 原始名稱 */
  original_name: string
  /** 劇情簡介 */
  overview: string
  /** 流行度 */
  popularity: number
  /** 海報圖片路徑 */
  poster_path: string | null
  /** 平均評分 */
  vote_average: number
  /** 評分數量 */
  vote_count: number
}
