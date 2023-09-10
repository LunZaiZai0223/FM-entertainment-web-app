import { RouterPathNameEnum } from '../enums/routerPathName.enum'

export const RouterPathMap = {
  HOME: () => RouterPathNameEnum.HOME,
  MOVIES: () => RouterPathNameEnum.MOVIES,
  TVS: () => RouterPathNameEnum.TVS,
  SEARCH: () => RouterPathNameEnum.SEARCH,
  MOVIE_DETAIL: (movieId: string) => `${RouterPathNameEnum.MOVIES}/${movieId}`,
  TV_SERIES_DETAIL: (tvSeriesId: string) => `${RouterPathNameEnum.TVS}/${tvSeriesId}`,
}
