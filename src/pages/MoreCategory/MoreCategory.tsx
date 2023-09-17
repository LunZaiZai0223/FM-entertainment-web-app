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

// local helpers
const getCurrentPageConfig = (pathname: string) => {
  switch (pathname) {
    case RouterPathNameEnum.TRENDING_MOVIES:
      return {
        onFetch: getTrendingMoviesRequest,
        type: 'MOVIE',
        title: 'Trending Movies',
      }

    case RouterPathNameEnum.POPULAR_MOVIES:
      return {
        onFetch: getPopularMoviesRequest,
        type: 'MOVIE',
        title: 'Popular Movies',
      }

    case RouterPathNameEnum.NOW_PLAYING_MOVIES:
      return {
        onFetch: getPlayingMoviesRequest,
        type: 'MOVIE',
        title: 'Now Playing Movies',
      }

    case RouterPathNameEnum.UPCOMING_MOVIES:
      return {
        onFetch: getUpcomingMoviesRequest,
        type: 'MOVIE',
        title: 'Upcoming Movies',
      }

    case RouterPathNameEnum.TOP_RATED_MOVIES:
      return {
        onFetch: getTopRatedMoviesRequest,
        type: 'MOVIE',
        title: 'Top Rated Movies',
      }

    case RouterPathNameEnum.TRENDING_TVS:
      return {
        onFetch: getTrendingTvSeriesRequest,
        type: 'TV',
        title: 'Trending TV Series',
      }

    case RouterPathNameEnum.POPULAR_TVS:
      return {
        onFetch: getPopularTvSeriesRequest,
        type: 'TV',
        title: 'Popular TV Series',
      }

    case RouterPathNameEnum.AIRING_TODAY_TVS:
      return {
        onFetch: getAiringTodayTvSeriesRequest,
        type: 'TV',
        title: 'TV Series Airing Today',
      }

    case RouterPathNameEnum.ON_AIR_TVS:
      return {
        onFetch: getOnTheAirTvSeriesRequest,
        type: 'TV',
        title: 'TV Series On The Air',
      }

    case RouterPathNameEnum.TOP_RATED_TVS:
      return {
        onFetch: getTopRatedTvSeriesRequest,
        type: 'TV',
        title: 'Top Rated TV Series',
      }

    default:
      return {
        onFetch: getTrendingTvSeriesRequest,
        type: 'TV',
        title: 'Trending TV Series',
      }
  }
}

const MoreCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { pathname } = useLocation()
  const urlQueryPageNum = searchParams.get(PAGE_NUM) ?? 1

  const currentPageConfig = getCurrentPageConfig(pathname)
  const { isLoading, data, isError } = useQuery(
    [`getMoreCategoryData-${pathname}`, urlQueryPageNum],
    () => {
      return currentPageConfig.onFetch({
        page: urlQueryPageNum ? Number(urlQueryPageNum) : 1,
      }) as Promise<ListResultModel<MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]>>
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
        title={currentPageConfig.title}
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
