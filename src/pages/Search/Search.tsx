import { useRef, useEffect } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'

// apis
import { getMoviesBySearch, getMultiBySearch, getTvSeriesBySearch } from '../../requests/tmdb'

// interfaces
import { ListResultModel } from '../../interfaces/commom.model'
import { DbItem } from '../../interfaces/dbItem.model'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

import Loader from '../../components/Loader'
import Error from '../../components/UI/Error'
import MediaCard from '../../components/UI/MediaCard'

// constants
import { RouterPathMap } from '../../constants/routerPathMap.constant'
import { MEDIA_TYPE } from '../../constants/mediaTypes.constants'

// styles
import { Item, List, Title } from './Search.style'

// hooks
import useOnScreen from '../../hooks/useOnScreen'

interface CardBody {
  title: string
  type: string
  date?: string
  id: number
  img?: string
}

const formatList = (item: DbItem | MovieItemByCategoryModel | TvSeriesItemByCategoryModel) => {
  if ('media_type' in item) {
    return {
      title: item.title || item.name,
      type: item.media_type === MEDIA_TYPE.MOVIE ? MEDIA_TYPE.MOVIE : MEDIA_TYPE.TV_SERIES,
      date: item.release_date || item.first_air_date,
      img: item.backdrop_path || item.poster_path,
      id: item.id,
    }
  } else if ('title' in item) {
    return {
      title: item.title,
      type: MEDIA_TYPE.MOVIE,
      date: item.release_date,
      img: item.backdrop_path || item.poster_path,
      id: item.id,
    }
  } else {
    return {
      title: item.name,
      type: MEDIA_TYPE.TV_SERIES,
      date: item.first_air_date,
      img: item.backdrop_path || item.poster_path,
      id: item.id,
    }
  }
}

const Search = () => {
  const observedRef = useRef<HTMLLIElement | null>(null)
  const { isIntersecting, setNode } = useOnScreen()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const { state = { type: MEDIA_TYPE.MULTI } } = useLocation()
  const { isFetching, isFetchingNextPage, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<
      ListResultModel<DbItem[] | MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]>
    >({
      queryKey: ['search', query, state.type],
      queryFn: ({ pageParam = 1 }) => {
        switch (state.type) {
          case MEDIA_TYPE.MULTI:
            return getMultiBySearch({ query, page: pageParam })

          case MEDIA_TYPE.MOVIE:
            return getMoviesBySearch({ query, page: pageParam })

          case MEDIA_TYPE.TV_SERIES:
            return getTvSeriesBySearch({ query, page: pageParam })

          default:
            return getMultiBySearch({ query, page: pageParam })
        }
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.results.length ? allPages.length + 1 : undefined
      },
    })

  const handleClickItem = (target: CardBody) => {
    navigate({
      pathname:
        target.type === MEDIA_TYPE.MOVIE
          ? RouterPathMap.MOVIE_DETAIL(target.id.toString())
          : RouterPathMap.TV_SERIES_DETAIL(target.id.toString()),
    })
  }

  const formattedList =
    data?.pages
      .map((item) => item.results)
      .flat()
      .map(formatList) ?? []

  useEffect(() => {
    if (!hasNextPage) return
    setNode(observedRef.current)

    if (isIntersecting && !isFetching) {
      fetchNextPage()
    }
  }, [data, isIntersecting, isFetching, hasNextPage])

  if (!data && isFetching) {
    return <Loader />
  }

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Title>
        Found {data?.pages[0].total_results} results for {`'${query}'`}
      </Title>
      <List>
        {formattedList.map((item, index) => {
          if (index === formattedList.length - 1) {
            return (
              <Item key={item.id + index} onClick={() => handleClickItem(item)} ref={observedRef}>
                <MediaCard
                  mediaType={item.type}
                  title={item.title}
                  img={item.img}
                  date={item.date}
                />
              </Item>
            )
          }
          return (
            <Item key={item.id} onClick={() => handleClickItem(item)}>
              <MediaCard mediaType={item.type} title={item.title} img={item.img} date={item.date} />
            </Item>
          )
        })}
      </List>
      {isFetchingNextPage && <Loader />}
    </>
  )
}

export default Search
