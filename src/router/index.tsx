import { createBrowserRouter } from 'react-router-dom'

// layouts
import BasicLayout from '../layouts/BasicLayout'

// pages
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Tvs from '../pages/Tvs'
import Search from '../pages/Search'
import Detail from '../pages/Detail'

// paths
import { RouterPathMap } from '../constants/routerPathMap.constant'

const router = createBrowserRouter([
  {
    path: RouterPathMap.HOME(),
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
