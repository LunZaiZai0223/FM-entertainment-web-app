interface Collection {
  /** 系列 ID */
  id: number
  /** 系列名稱 */
  name: string
  /** 系列海報圖片路徑，可能為空 */
  poster_path: string | null
  /** 系列背景圖片路徑，可能為空 */
  backdrop_path: string | null
}

export interface Genre {
  /** 類別 ID */
  id: number
  /** 類別名稱 */
  name: string
}

interface ProductionCompany {
  /** 製片公司 ID */
  id: number
  /** 公司 logo 路徑，可能為空 */
  logo_path: string | null
  /** 公司名稱 */
  name: string
  /** 公司所在國家 */
  origin_country: string
}

interface ProductionCountry {
  /** 國家 ISO 代碼 */
  iso_3166_1: string
  /** 國家名稱 */
  name: string
}

interface SpokenLanguage {
  /** 英文名稱 */
  english_name: string
  /** ISO 代碼 */
  iso_639_1: string
  /** 語言名稱 */
  name: string
}

export interface Detail {
  /** 是否為成人內容 */
  adult: boolean
  /** 背景圖片路徑 */
  backdrop_path: string
  /** 所屬系列資訊 */
  belongs_to_collection: Collection
  /** 預算金額 */
  budget: number
  /** 電影類別 */
  genres: Genre[]
  /** 電影官方網站 */
  homepage: string
  /** 電影 ID */
  id: number
  /** IMDb ID */
  imdb_id: string
  /** 原始語言 */
  original_language: string
  /** 原始標題 */
  original_title: string
  /** 簡介 */
  overview: string
  /** 受歡迎度 */
  popularity: number
  /** 海報圖片路徑 */
  poster_path: string
  /** 製片公司資訊 */
  production_companies: ProductionCompany[]
  /** 製片國家資訊 */
  production_countries: ProductionCountry[]
  /** 上映日期 */
  release_date: string
  /** 電影票房收入 */
  revenue: number
  /** 片長 */
  runtime: number
  /** 電影語言資訊 */
  spoken_languages: SpokenLanguage[]
  /** 狀態 */
  status: string
  /** 宣傳標語 */
  tagline: string
  /** 電影標題 */
  title: string
  /** 是否有影片 */
  video: boolean
  /** 平均評分 */
  vote_average: number
  /** 評分人數 */
  vote_count: number
  /** 電視影集名稱 */
  name: string
  /** 電視影集初次播出日期 yyyy-mm-dd */
  first_air_date: string
  /** 電視影集結束播出日期 yyyy-mm-dd */
  last_air_date: string
}
