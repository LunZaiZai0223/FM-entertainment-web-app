import { MediaTypeTitle } from '../constants/mediaTypes.constants'

export interface MediaInfo {
  id: number
  img?: string
  date?: string
  mediaType: MediaTypeTitle
  title: string
  genres: { id: number; name: string }[]
}
