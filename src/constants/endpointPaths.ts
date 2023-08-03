export const MovieEndpointPath = {
  Trending: (isDay = true) => {
    return `/trending/movie/${isDay ? 'day' : 'week'}`
  },
  Detail: (movieId: string) => {
    return `/movie/${movieId}`
  },
  Popular: '/movie/popular',
  Playing: '/movie/now_playing',
  Upcoming: '/movie/upcoming',
  TopRated: '/movie/top_rated',
}

export const TvEndpointPath = {
  Trending: (isDay = true) => {
    return `/trending/tv/${isDay ? 'day' : 'week'}`
  },
  Detail: (tvSeriesId: string) => {
    return `/tv/${tvSeriesId}`
  },
  Popular: '/tv/popular',
  AiringToday: '/tv/airing_today',
  OnTheAir: '/tv/on_the_air',
  TopRated: '/tv/top_rated',
}

export const TmdbImageEndpoint = 'https://image.tmdb.org/t/p/original'
