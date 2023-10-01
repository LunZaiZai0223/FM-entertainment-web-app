import { useQuery } from 'react-query'

// apis
import { getMovieGenresRequest } from '../../requests/tmdb'

// components
import CategoryList from '../../components/CategoryList'
import Loader from '../../components/Loader'

const Movies = () => {
  const { data, isLoading } = useQuery('movieGenreList', getMovieGenresRequest)

  if (isLoading) {
    return <Loader />
  }

  return <CategoryList genreList={data?.genres ?? []} />
}

export default Movies
