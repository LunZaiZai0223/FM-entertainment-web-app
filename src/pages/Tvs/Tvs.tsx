import { useQuery } from 'react-query'

// apis
import { getTvSeriesGenresRequest } from '../../requests/tmdb'

// theme
import theme from '../../styles/theme'

// components
import CategoryList from '../../components/CategoryList'
import Loader from '../../components/Loader'

const Tvs = () => {
  const { data, isLoading } = useQuery('tvSeriesGenreList', getTvSeriesGenresRequest)

  if (isLoading) {
    return <Loader />
  }

  return <CategoryList mainColor={theme.colors.emeraldGreen} genreList={data?.genres ?? []} />
}

export default Tvs
