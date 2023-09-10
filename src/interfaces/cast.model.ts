export interface Cast {
  /** 是否為成人內容 */
  adult: boolean
  /** 演員性別 */
  gender: number
  /** 演員 ID */
  id: number
  /** 以演員為主的部門 */
  known_for_department: string
  /** 演員名稱 */
  name: string
  /** 原始演員名稱 */
  original_name: string
  /** 演員受歡迎程度 */
  popularity: number
  /** 演員個人資料海報圖片路徑 */
  profile_path: string | null
  /** 演員在演出陣容中的 ID */
  cast_id: number
  /** 角色名稱 */
  character: string
  /** 演員參與製作的評價 ID */
  credit_id: string
  /** 角色出場順序 */
  order: number
}

export interface CastModel {
  cast: Cast[]
}
