import axios from 'axios'

// endpoint paths
import { MovieEndpointPath, TvEndpointPath } from '../../constants/endpointPaths.constant'

// interfaces
import { ListResultModel } from '../../interfaces/commom.model'
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'
import { Detail } from '../../interfaces/detail.model'
import { CastModel } from '../../interfaces/cast.model'
import { Trailer } from '../../interfaces/trailer.model'

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

export const getTrendingMoviesRequest = async (params?: { page: number }) => {
  const trendingMovieResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.Trending(), { params })
  return trendingMovieResponse.data
}

export const getMovieDetailRequest = async (movieId: string) => {
  const movieDetailResponse = await mainTmdbAxios.get<Detail>(MovieEndpointPath.Detail(movieId))
  return movieDetailResponse.data
}

export const getMovieCastsRequest = async (movieId: string) => {
  const movieCastsResponse = await mainTmdbAxios.get<CastModel>(MovieEndpointPath.Casts(movieId))
  return movieCastsResponse.data
}

export const getMovieVideosRequest = async (movieId: string) => {
  const movieVideosResponse = await mainTmdbAxios.get<ListResultModel<Trailer[]>>(
    MovieEndpointPath.Videos(movieId),
  )
  return movieVideosResponse.data
}

export const getPopularMoviesRequest = async (params?: { page: number }) => {
  const popularMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.Popular, { params })

  return popularMoviesResponse.data
}

export const getPlayingMoviesRequest = async (params?: { page: number }) => {
  const playingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.Playing, { params })

  return playingMoviesResponse.data
}

export const getUpcomingMoviesRequest = async (params?: { page: number }) => {
  const upcomingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.Upcoming, { params })

  return upcomingMoviesResponse.data
}

export const getTopRatedMoviesRequest = async (params?: { page: number }) => {
  const topRatedMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<MovieItemByCategoryModel[]>
  >(MovieEndpointPath.TopRated, { params })

  return topRatedMoviesResponse.data
}

export const getTrendingTvSeriesRequest = async (params?: { page: number }) => {
  const trendingTvSeriesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.Trending(), { params })
  return trendingTvSeriesResponse.data
}

export const getTvSeriesDetailRequest = async (tvSeriesId: string) => {
  const tvSeriesDetailResponse = await mainTmdbAxios.get<Detail>(TvEndpointPath.Detail(tvSeriesId))
  return tvSeriesDetailResponse.data
}

export const getTvSeriesCastsRequest = async (movieId: string) => {
  const movieCastsResponse = await mainTmdbAxios.get<CastModel>(TvEndpointPath.Casts(movieId))
  return movieCastsResponse.data
}

export const getTvSeriesVideosRequest = async (movieId: string) => {
  const movieVideosResponse = await mainTmdbAxios.get<ListResultModel<Trailer[]>>(
    TvEndpointPath.Videos(movieId),
  )
  return movieVideosResponse.data
}

export const getPopularTvSeriesRequest = async (params?: { page: number }) => {
  const popularTvSeriesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.Popular, { params })

  return popularTvSeriesResponse.data
}

export const getAiringTodayTvSeriesRequest = async (params?: { page: number }) => {
  const playingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.AiringToday, { params })

  return playingMoviesResponse.data
}

export const getOnTheAirTvSeriesRequest = async (params?: { page: number }) => {
  const upcomingMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.OnTheAir, { params })

  return upcomingMoviesResponse.data
}

export const getTopRatedTvSeriesRequest = async (params?: { page: number }) => {
  const topRatedMoviesResponse = await mainTmdbAxios.get<
    ListResultModel<TvSeriesItemByCategoryModel[]>
  >(TvEndpointPath.TopRated, { params })

  return topRatedMoviesResponse.data
}
