const MOVIE = 'MOVIE'
const TV_SERIES = 'TV_SERIES'
const MULTI = 'MULTI'

export const MEDIA_TYPE = {
  MOVIE,
  TV_SERIES,
  MULTI,
}

export const MEDIA_TYPE_TITLE = {
  [MEDIA_TYPE.MOVIE]: 'Movie',
  [MEDIA_TYPE.TV_SERIES]: 'TV Series',
}

export type MediaTypeTitle =
  | typeof MEDIA_TYPE.MOVIE
  | typeof MEDIA_TYPE.TV_SERIES
  | typeof MEDIA_TYPE.MULTI
