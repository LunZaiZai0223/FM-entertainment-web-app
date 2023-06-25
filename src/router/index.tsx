import { createBrowserRouter } from 'react-router-dom'

// components
import BasicLayout from '../layouts/BasicLayout'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Tvs from '../pages/Tvs'
import Search from '../pages/Search'

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
        path: RouterPathMap.TVS(),
        element: <Tvs />,
      },
      {
        path: RouterPathMap.SEARCH(),
        element: <Search />,
      },
    ],
  },
])

export default router
