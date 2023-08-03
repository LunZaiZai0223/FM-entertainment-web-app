export const MovieEndpointPath = {
  Trending: (isDay = true) => {
    return `/trending/movie/${isDay ? 'day' : 'week'}`
  },
  Detail: (movieId: string) => {
    return `/movie/${movieId}`
  },
}

export const TmdbImageEndpoint = 'https://image.tmdb.org/t/p/original'
