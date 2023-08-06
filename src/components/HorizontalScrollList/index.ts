// interfaces
import { HorizontalItem } from './HorizontalScrollList'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

export const formatPropsToHorizontalProp = (
  movies: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[],
): HorizontalItem[] => {
  return movies.map((item) => {
    const title = 'title' in item ? item.title : item.original_name
    const releaseYear = 'release_date' in item ? item.release_date : item.first_air_date
    return {
      title,
      releaseYear: releaseYear.split('-')[0],
      imgSrc: `${TmdbImageEndpoint}${item.backdrop_path || item.poster_path}`,
      type: 'MOVIE',
      id: item.id,
    }
  })
}

export { default } from './HorizontalScrollList'
