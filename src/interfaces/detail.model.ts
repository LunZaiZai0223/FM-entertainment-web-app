interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  character: string
  credit_id: string
  order: number
}

interface Credits {
  cast: Cast[]
}

interface Detail {
  /** 是否為成人 */
  adult: boolean
  /** 背景圖片路徑 */
  backdrop_path: string
  /** 電影類型 */
  genres: {
    /** 類型ID */
    id: number
    /** 類型名稱 */
    name: string
  }[]
  /** 官方網站 */
  homepage: string | null
  /** 電影ID */
  id: number
  /** IMDB ID */
  imdb_id: string | null
  /** 原始語言 */
  original_language: string
  /** 原始標題 */
  original_title: string
  /** 劇情簡介 */
  overview: string
  /** 流行度 */
  popularity: number
  /** 海報圖片路徑 */
  poster_path: string | null
  /** 上映日期 */
  release_date: string
  /** 片長 */
  runtime: number
  /** 狀態 */
  status: string
  /** 標語 */
  tagline: string
  /** 電影標題 */
  title: string
  /** 是否有影片預告片 */
  video: boolean
  /** 平均評分 */
  vote_average: number
  /** 評分數量 */
  vote_count: number
}

export interface DetailResultModel {
  credits: Credits
  detail: Detail
}
