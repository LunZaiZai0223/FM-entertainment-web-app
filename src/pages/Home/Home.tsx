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

// constants
import { RouterPathMap } from '../../constants/routerPathMap.constant'
import { MEDIA_TYPE } from '../../constants/mediaTypes.constants'

interface CategoryDataWithTitleAndCaption {
  title: string
  caption: string
  dataList: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]
  goToMorePath: string
}

// local constants
const moviesTitleAndCaptions = [
  {
    title: 'Popular',
    caption: MEDIA_TYPE.MOVIE,
    goToMorePath: RouterPathMap.POPULAR_MOVIES(),
  },
  {
    title: 'Now Playing',
    caption: MEDIA_TYPE.MOVIE,
    goToMorePath: RouterPathMap.NOW_PLAYING_MOVIES(),
  },
  {
    title: 'Upcoming',
    caption: MEDIA_TYPE.MOVIE,
    goToMorePath: RouterPathMap.UPCOMING_MOVIES(),
  },
  {
    title: 'Top Rated',
    caption: MEDIA_TYPE.MOVIE,
    goToMorePath: RouterPathMap.TOP_RATED_MOVIES(),
  },
]

const tvSeriesTitleAndCaptions = [
  {
    title: 'Popular',
    caption: MEDIA_TYPE.TV_SERIES,
    goToMorePath: RouterPathMap.POPULAR_TVS(),
  },
  {
    title: 'Airing Today',
    caption: MEDIA_TYPE.TV_SERIES,
    goToMorePath: RouterPathMap.AIRING_TODAY_TVS(),
  },
  {
    title: 'On Air',
    caption: MEDIA_TYPE.TV_SERIES,
    goToMorePath: RouterPathMap.ON_AIR_TVS(),
  },
  {
    title: 'Top Rated',
    caption: MEDIA_TYPE.TV_SERIES,
    goToMorePath: RouterPathMap.TOP_RATED_TVS(),
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
        goToMorePath: moviesTitleAndCaptions[index].goToMorePath,
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
        goToMorePath: tvSeriesTitleAndCaptions[index].goToMorePath,
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
        restHomeTypeMovies.map(({ title, caption, dataList, goToMorePath }, index) => {
          return (
            <CategorySection
              title={title}
              caption={caption}
              dataList={dataList as MovieItemByCategoryModel[]}
              key={`${title}-${index}`}
              goToMorePath={goToMorePath}
              shouldCardLarge
            />
          )
        })}
      <HorizontalScrollList
        sectionCaption='tv series'
        sectionTitle='Trending'
        list={formattedTrendingTvSeriesHorizontalList}
      />
      {restHomeTypeTvSeries.length > 0 &&
        restHomeTypeTvSeries.map(({ title, caption, dataList, goToMorePath }, index) => {
          return (
            <CategorySection
              title={title}
              caption={caption}
              dataList={dataList as TvSeriesItemByCategoryModel[]}
              key={`${title}-${index}`}
              goToMorePath={goToMorePath}
              shouldCardLarge
            />
          )
        })}
    </>
  )
}

export default Home
