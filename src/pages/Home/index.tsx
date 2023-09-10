// libs
import { useQuery } from 'react-query'

// utils
import { processMultipleRequests } from '../../utils/processMultipleRequests'

// apis
import {
  getTrendingMoviesRequest,
  getPopularMoviesRequest,
  getPlayingMoviesRequest,
  getUpcomingMoviesRequest,
  getTopRatedMoviesRequest,
  getTrendingTvSeriesRequest,
  getPopularTvSeriesRequest,
  getAiringTodayTvSeriesRequest,
  getOnTheAirTvSeriesRequest,
  getTopRatedTvSeriesRequest,
} from '../../requests/tmdb'

// components
import HorizontalScrollList, {
  formatPropsToHorizontalProp,
} from '../../components/HorizontalScrollList'
import CategorySection from '../../components/CategorySection'
import Loader from '../../components/Loader'

// interfaces
import { HorizontalItem } from '../../components/HorizontalScrollList/HorizontalScrollList'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

interface CategoryDataWithTitleAndCaption {
  title: string
  caption: 'MOVIE' | 'TV'
  dataList: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]
}

// local constants
const moviesTitleAndCaptions = [
  {
    title: 'Popular',
    caption: 'MOVIE' as 'MOVIE' | 'TV',
  },
  {
    title: 'Now Playing',
    caption: 'MOVIE' as 'MOVIE' | 'TV',
  },
  {
    title: 'Upcoming',
    caption: 'MOVIE' as 'MOVIE' | 'TV',
  },
  {
    title: 'Top Rated',
    caption: 'MOVIE' as 'MOVIE' | 'TV',
  },
]

const tvSeriesTitleAndCaptions = [
  {
    title: 'Popular',
    caption: 'TV' as 'MOVIE' | 'TV',
  },
  {
    title: 'Airing Today',
    caption: 'TV' as 'MOVIE' | 'TV',
  },
  {
    title: 'On Air',
    caption: 'TV' as 'MOVIE' | 'TV',
  },
  {
    title: 'Top Rated',
    caption: 'TV' as 'MOVIE' | 'TV',
  },
]

const Home = () => {
  const {
    isLoading: isFetchingMovies,
    isError: isFetchingMoviesError,
    data: moviesData,
  } = useQuery('getHomePageMoviesData', () => {
    return processMultipleRequests([
      getTrendingMoviesRequest(),
      getPopularMoviesRequest(),
      getPlayingMoviesRequest(),
      getUpcomingMoviesRequest(),
      getTopRatedMoviesRequest(),
    ])
  })

  const {
    isLoading: isFetchingTvSeries,
    isError: isFetchingTvSeriesError,
    data: tvSeriesData,
  } = useQuery('getHomePageTvSeriesData', () => {
    return processMultipleRequests([
      getTrendingTvSeriesRequest(),
      getPopularTvSeriesRequest(),
      getAiringTodayTvSeriesRequest(),
      getOnTheAirTvSeriesRequest(),
      getTopRatedTvSeriesRequest(),
    ])
  })

  // movies
  let formattedTrendingMoviesHorizontalList: HorizontalItem[] = []
  let restHomeTypeMovies: CategoryDataWithTitleAndCaption[] = []
  if (moviesData) {
    const [trending, ...rest] = moviesData

    formattedTrendingMoviesHorizontalList = formatPropsToHorizontalProp(trending.results)
    restHomeTypeMovies = rest.map((categoryMovieData, index) => {
      return {
        title: moviesTitleAndCaptions[index].title,
        caption: moviesTitleAndCaptions[index].caption,
        dataList: categoryMovieData.results.slice(0, 6),
      }
    })
  }

  // tv series
  let formattedTrendingTvSeriesHorizontalList: HorizontalItem[] = []
  let restHomeTypeTvSeries: CategoryDataWithTitleAndCaption[] = []
  if (tvSeriesData) {
    const [trending, ...rest] = tvSeriesData

    formattedTrendingTvSeriesHorizontalList = formatPropsToHorizontalProp(trending.results)
    restHomeTypeTvSeries = rest.map((categoryTvSeriesData, index) => {
      return {
        title: tvSeriesTitleAndCaptions[index].title,
        caption: tvSeriesTitleAndCaptions[index].caption,
        dataList: categoryTvSeriesData.results.slice(0, 6),
      }
    })
  }

  if (isFetchingMovies || isFetchingTvSeries) {
    return <Loader />
  }

  if (isFetchingMoviesError || isFetchingTvSeriesError) {
    return <div>Oh no!</div>
  }

  return (
    <>
      <HorizontalScrollList
        sectionCaption='movie'
        sectionTitle='Trending'
        list={formattedTrendingMoviesHorizontalList}
      />
      {restHomeTypeMovies.length > 0 &&
        restHomeTypeMovies.map(({ title, caption, dataList }, index) => {
          return (
            <CategorySection
              title={title}
              caption={caption}
              dataList={dataList as MovieItemByCategoryModel[]}
              key={`${title}-${index}`}
            />
          )
        })}
      <HorizontalScrollList
        sectionCaption='tv series'
        sectionTitle='Trending'
        list={formattedTrendingTvSeriesHorizontalList}
      />
      {restHomeTypeTvSeries.length > 0 &&
        restHomeTypeTvSeries.map(({ title, caption, dataList }, index) => {
          return (
            <CategorySection
              title={title}
              caption={caption}
              dataList={dataList as TvSeriesItemByCategoryModel[]}
              key={`${title}-${index}`}
            />
          )
        })}
    </>
  )
}

export default Home
