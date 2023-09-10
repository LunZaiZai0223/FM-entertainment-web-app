export interface Trailer {
  /** 語言代碼 (ISO 639-1) */
  iso_639_1: string
  /** 國家代碼 (ISO 3166-1) */
  iso_3166_1: string
  /** 影片名稱 */
  name: string
  /** 影片識別鍵 */
  key: string
  /** 影片網站 */
  site: string
  /** 影片尺寸 */
  size: number
  /** 影片類型 */
  type: string
  /** 影片是否官方預告片 */
  official: boolean
  /** 影片發佈時間 */
  published_at: string
  /** 影片 ID */
  id: string
}
