import { useQuery } from 'react-query'

import { useSearchParams, useLocation } from 'react-router-dom'

// apis
import {
  getPopularMoviesRequest,
  getTrendingMoviesRequest,
  getPlayingMoviesRequest,
  getUpcomingMoviesRequest,
  getTopRatedMoviesRequest,
  getTrendingTvSeriesRequest,
  getPopularTvSeriesRequest,
  getAiringTodayTvSeriesRequest,
  getOnTheAirTvSeriesRequest,
  getTopRatedTvSeriesRequest,
  getMoviesWithGenreRequest,
  getTvSeriesWithGenreRequest,
} from '../../requests/tmdb'

// interfaces
import { ListResultModel } from '../../interfaces/commom.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'

// components
import CategorySection from '../../components/CategorySection'
import Pagination from '../../components/UI/Pagination'
import SkeletonImage from '../../components/UI/SkeletonImage'
import Error from '../../components/UI/Error'

// styles
import { LoaderContainer } from './MoreCategory.style'
import { RouterPathNameEnum } from '../../enums/routerPathName.enum'

// local constants
const PAGE_NUM = 'pageNum'
const GENRE = 'genre'
const GENRE_NAME = 'genreName'

// local helpers
const getCurrentPageConfig = (pathname: string) => {
  switch (pathname) {
    case RouterPathNameEnum.TRENDING_MOVIES:
      return {
        type: 'MOVIE',
        title: 'Trending Movies',
      }

    case RouterPathNameEnum.POPULAR_MOVIES:
      return {
        type: 'MOVIE',
        title: 'Popular Movies',
      }

    case RouterPathNameEnum.NOW_PLAYING_MOVIES:
      return {
        type: 'MOVIE',
        title: 'Now Playing Movies',
      }

    case RouterPathNameEnum.UPCOMING_MOVIES:
      return {
        type: 'MOVIE',
        title: 'Upcoming Movies',
      }

    case RouterPathNameEnum.TOP_RATED_MOVIES:
      return {
        type: 'MOVIE',
        title: 'Top Rated Movies',
      }

    case RouterPathNameEnum.TRENDING_TVS:
      return {
        type: 'TV',
        title: 'Trending TV Series',
      }

    case RouterPathNameEnum.POPULAR_TVS:
      return {
        type: 'TV',
        title: 'Popular TV Series',
      }

    case RouterPathNameEnum.AIRING_TODAY_TVS:
      return {
        type: 'TV',
        title: 'TV Series Airing Today',
      }

    case RouterPathNameEnum.ON_AIR_TVS:
      return {
        type: 'TV',
        title: 'TV Series On The Air',
      }

    case RouterPathNameEnum.TOP_RATED_TVS:
      return {
        type: 'TV',
        title: 'Top Rated TV Series',
      }

    case RouterPathNameEnum.GENRE_MOVIES:
      return {
        type: 'MOVIE',
        title: (title: string) => title,
      }

    case RouterPathNameEnum.GENRE_TVS:
      return {
        type: 'TV',
        title: (title: string) => title,
      }

    default:
      return {
        type: 'TV',
        title: 'Trending TV Series',
      }
  }
}

const MoreCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { pathname } = useLocation()
  const urlQueryPageNum = searchParams.get(PAGE_NUM) ?? 1
  const urlGenre = searchParams.get(GENRE)
  const urlGenreName = searchParams.get(GENRE_NAME) ?? ''

  const currentPageConfig = getCurrentPageConfig(pathname)
  const { isLoading, data, isError } = useQuery(
    [`getMoreCategoryData-${pathname}${urlGenre ?? ''}`, urlQueryPageNum],
    (): Promise<ListResultModel<MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]>> => {
      switch (pathname) {
        case RouterPathNameEnum.TRENDING_MOVIES:
          return getTrendingMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.POPULAR_MOVIES:
          return getPopularMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.NOW_PLAYING_MOVIES:
          return getPlayingMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.UPCOMING_MOVIES:
          return getUpcomingMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.TOP_RATED_MOVIES:
          return getTopRatedMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.GENRE_MOVIES:
          return getMoviesWithGenreRequest({
            page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
            ['with_genres']: Number(urlGenre),
          })

        case RouterPathNameEnum.TRENDING_TVS:
          return getTrendingTvSeriesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.POPULAR_TVS:
          return getPopularTvSeriesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })

        case RouterPathNameEnum.AIRING_TODAY_TVS:
          return getAiringTodayTvSeriesRequest({
            page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
          })

        case RouterPathNameEnum.ON_AIR_TVS:
          return getOnTheAirTvSeriesRequest({
            page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
          })

        case RouterPathNameEnum.TOP_RATED_TVS:
          return getTopRatedTvSeriesRequest({
            page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
          })

        case RouterPathNameEnum.GENRE_TVS:
          return getTvSeriesWithGenreRequest({
            page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
            ['with_genres']: Number(urlGenre),
          })

        default:
          return getTrendingMoviesRequest({ page: urlQueryPageNum ? Number(urlQueryPageNum) : 1 })
      }
    },
  )

  const handleChangePagination = (type: 'NEXT' | 'PREV') => () => {
    if (type === 'NEXT') {
      searchParams.set(PAGE_NUM, (Number(urlQueryPageNum) + 1).toString())
    } else {
      searchParams.set(PAGE_NUM, (Number(urlQueryPageNum) - 1).toString())
    }
    setSearchParams(searchParams)
  }

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return (
      <LoaderContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <SkeletonImage />
          </div>
        ))}
      </LoaderContainer>
    )
  }

  if (!data) {
    return <></>
  }

  return (
    <>
      <CategorySection
        title={
          typeof currentPageConfig.title === 'function'
            ? currentPageConfig.title(urlGenreName)
            : currentPageConfig.title
        }
        dataList={data.results}
        caption={currentPageConfig.type}
        goToMorePath={''}
      />
      <Pagination
        pageNum={Number(urlQueryPageNum)}
        totalPageNum={data.total_pages}
        onNext={handleChangePagination('NEXT')}
        onPrev={handleChangePagination('PREV')}
      />
    </>
  )
}

export default MoreCategory
