import axios from 'axios'

// endpoint paths
import { MovieEndpointPath, TvEndpointPath } from '../../constants/endpointPaths'

// interfaces
import { DbItem } from '../../interfaces/dbItem.model'
import { ListResultModel } from '../../interfaces/commom.model'
import { DetailResultModel } from '../../interfaces/detail.model'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

// environment variables
const { REACT_APP_BASE_TMDB_ENDPOINT, REACT_APP_TMDB_ACCESS_TOKEN } = process.env

const authorization = `Bearer ${REACT_APP_TMDB_ACCESS_TOKEN}`

const mainTmdbAxios = axios.create({
  baseURL: REACT_APP_BASE_TMDB_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    Authorization: authorization,
  },
})

export const getTrendingMoviesRequest = async () => {
  const trendingMovieResponse = await mainTmdbAxios.get<ListResultModel<DbItem[]>>(
    MovieEndpointPath.Trending(),
  )
  return trendingMovieResponse.data
}

export const getMovieDetailRequest = async (movieId: string) => {
  const movieDetailResponse = await mainTmdbAxios.get<DetailResultModel>(
    MovieEndpointPath.Detail(movieId),
  )
  return movieDetailResponse.data
}

export const getPopularMoviesRequest = async () => {
  const popularMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.Popular, { params: { page: 1 } })

  return popularMoviesResponse.data
}

export const getPlayingMoviesRequest = async () => {
  const playingMoviesResponse = await mainTmdbAxios.get<ListResultModel<MovieItemByCategoryModel>>(
    MovieEndpointPath.Playing,
    { params: { page: 1 } },
  )

  return playingMoviesResponse.data
}

export const getUpcomingMoviesRequest = async () => {
  const upcomingMoviesResponse = await mainTmdbAxios.get<ListResultModel<MovieItemByCategoryModel>>(
    MovieEndpointPath.Upcoming,
    { params: { page: 1 } },
  )

  return upcomingMoviesResponse.data
}

export const getTopRatedMoviesRequest = async () => {
  const topRatedMoviesResponse = await mainTmdbAxios.get<ListResultModel<MovieItemByCategoryModel>>(
    MovieEndpointPath.TopRated,
    { params: { page: 1 } },
  )

  return topRatedMoviesResponse.data
}

export const getTrendingTvSeriesRequest = async () => {
  const trendingTvSeriesResponse = await mainTmdbAxios.get<ListResultModel<DbItem[]>>(
    TvEndpointPath.Trending(),
  )
  return trendingTvSeriesResponse.data
}

export const getTvSeriesDetailRequest = async (tvSeriesId: string) => {
  const tvSeriesDetailResponse = await mainTmdbAxios.get<DetailResultModel>(
    TvEndpointPath.Detail(tvSeriesId),
  )
  return tvSeriesDetailResponse.data
}

export const getPopularTvSeriesRequest = async () => {
  const popularTvSeriesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.Popular, { params: { page: 1 } })

  return popularTvSeriesResponse.data
}

export const getAiringTodayTvSeriesRequest = async () => {
  const playingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel>
  >(TvEndpointPath.AiringToday, { params: { page: 1 } })

  return playingMoviesResponse.data
}

export const getOnTheAirTvSeriesRequest = async () => {
  const upcomingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel>
  >(TvEndpointPath.OnTheAir, { params: { page: 1 } })

  return upcomingMoviesResponse.data
}

export const getTopRatedTvSeriesRequest = async () => {
  const topRatedMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel>
  >(TvEndpointPath.TopRated, { params: { page: 1 } })

  return topRatedMoviesResponse.data
}
