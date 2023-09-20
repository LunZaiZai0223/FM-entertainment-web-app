import { RouterPathNameEnum } from '../enums/routerPathName.enum'

export const RouterPathMap = {
  HOME: () => RouterPathNameEnum.HOME,
  MOVIES: () => RouterPathNameEnum.MOVIES,
  TVS: () => RouterPathNameEnum.TVS,
  SEARCH: () => RouterPathNameEnum.SEARCH,
  MOVIE_DETAIL: (movieId: string) => `${RouterPathNameEnum.MOVIES}/${movieId}`,
  TV_SERIES_DETAIL: (tvSeriesId: string) => `${RouterPathNameEnum.TVS}/${tvSeriesId}`,
  TRENDING_MOVIES: () => RouterPathNameEnum.TRENDING_MOVIES,
  POPULAR_MOVIES: () => RouterPathNameEnum.POPULAR_MOVIES,
  NOW_PLAYING_MOVIES: () => RouterPathNameEnum.NOW_PLAYING_MOVIES,
  UPCOMING_MOVIES: () => RouterPathNameEnum.UPCOMING_MOVIES,
  TOP_RATED_MOVIES: () => RouterPathNameEnum.TOP_RATED_MOVIES,
  GENRE_MOVIES: () => RouterPathNameEnum.GENRE_MOVIES,
  TRENDING_TVS: () => RouterPathNameEnum.TRENDING_TVS,
  POPULAR_TVS: () => RouterPathNameEnum.POPULAR_TVS,
  AIRING_TODAY_TVS: () => RouterPathNameEnum.AIRING_TODAY_TVS,
  ON_AIR_TVS: () => RouterPathNameEnum.ON_AIR_TVS,
  TOP_RATED_TVS: () => RouterPathNameEnum.TOP_RATED_TVS,
  GENRE_TVS: () => RouterPathNameEnum.GENRE_TVS,
}
