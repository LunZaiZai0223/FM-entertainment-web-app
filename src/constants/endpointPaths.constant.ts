export const MovieEndpointPath = {
  Trending: (isDay = true) => {
    return `/trending/movie/${isDay ? 'day' : 'week'}`
  },
  Detail: (movieId: string) => {
    return `/movie/${movieId}`
  },
  Casts: (movieId: string) => {
    return `/movie/${movieId}/credits`
  },
  Videos: (movieId: string) => {
    return `/movie/${movieId}/videos`
  },
  Popular: '/movie/popular',
  Playing: '/movie/now_playing',
  Upcoming: '/movie/upcoming',
  TopRated: '/movie/top_rated',
  Genre: '/genre/movie/list?language=en',
  ListWithGenre: '/discover/movie',
}

export const TvEndpointPath = {
  Trending: (isDay = true) => {
    return `/trending/tv/${isDay ? 'day' : 'week'}`
  },
  Detail: (tvSeriesId: string) => {
    return `/tv/${tvSeriesId}`
  },
  Casts: (tvSeriesId: string) => {
    return `/tv/${tvSeriesId}/credits`
  },
  Videos: (tvSeriesId: string) => {
    return `/tv/${tvSeriesId}/videos`
  },
  Popular: '/tv/popular',
  AiringToday: '/tv/airing_today',
  OnTheAir: '/tv/on_the_air',
  TopRated: '/tv/top_rated',
  Genre: '/genre/tv/list?language=en',
  ListWithGenre: '/discover/tv',
}

export const TmdbImageEndpoint = 'https://image.tmdb.org/t/p/original'
export const ImdbBaseUrl = 'https://www.imdb.com/title/'
export const YoutubeThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
export const YoutubePrefixUrl = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`
