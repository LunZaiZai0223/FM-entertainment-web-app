// interfaces
import { HorizontalItem } from './HorizontalScrollList'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths.constant'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

export const formatPropsToHorizontalProp = (
  movies: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[],
): HorizontalItem[] => {
  return movies.map((item) => {
    const isTv = 'first_air_date' in item
    const title = 'title' in item ? item.title : item.original_name
    const releaseYear = isTv ? item.first_air_date : item.release_date
    return {
      title,
      releaseYear: releaseYear.split('-')[0],
      imgSrc: `${TmdbImageEndpoint}${item.backdrop_path || item.poster_path}`,
      type: isTv ? 'TV' : 'MOVIE',
      id: item.id,
    }
  })
}

export { default } from './HorizontalScrollList'
