import { createBrowserRouter } from 'react-router-dom'

// layouts
import BasicLayout from '../layouts/BasicLayout'

// pages
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Tvs from '../pages/Tvs'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import MoreCategory from '../pages/MoreCategory'

// paths
import { RouterPathMap } from '../constants/routerPathMap.constant'

const MORE_CATEGORY_PAGES = [
  RouterPathMap.TRENDING_MOVIES(),
  RouterPathMap.POPULAR_MOVIES(),
  RouterPathMap.NOW_PLAYING_MOVIES(),
  RouterPathMap.UPCOMING_MOVIES(),
  RouterPathMap.TOP_RATED_MOVIES(),
  RouterPathMap.TRENDING_TVS(),
  RouterPathMap.POPULAR_TVS(),
  RouterPathMap.AIRING_TODAY_TVS(),
  RouterPathMap.ON_AIR_TVS(),
  RouterPathMap.TOP_RATED_TVS(),
  RouterPathMap.GENRE_MOVIES(),
  RouterPathMap.GENRE_TVS(),
]

const router = createBrowserRouter([
  {
    path: RouterPathMap.HOME(),
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...MORE_CATEGORY_PAGES.map((categoryPath) => ({
        path: categoryPath,
        element: <MoreCategory />,
      })),
      {
        path: RouterPathMap.MOVIES(),
        element: <Movies />,
      },
      {
        path: RouterPathMap.MOVIE_DETAIL(':id'),
        element: <Detail type='MOVIE' />,
      },
      {
        path: RouterPathMap.TVS(),
        element: <Tvs />,
      },
      {
        path: RouterPathMap.TV_SERIES_DETAIL(':id'),
        element: <Detail type='TV' />,
      },
      {
        path: RouterPathMap.SEARCH(),
        element: <Search />,
      },
    ],
  },
])

export default router
