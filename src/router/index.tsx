import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

// layouts
import BasicLayout from '../layouts/BasicLayout'
import AccountLayout from '../layouts/AccountLayout'

// pages
const Home = lazy(() => import('../pages/Home'))
const Tvs = lazy(() => import('../pages/Tvs'))
const Movies = lazy(() => import('../pages/Movies'))
const Detail = lazy(() => import('../pages/Detail'))
const MoreCategory = lazy(() => import('../pages/MoreCategory'))
const Search = lazy(() => import('../pages/Search'))
const My = lazy(() => import('../pages/My'))
const Account = lazy(() => import('../pages/Account'))

// component
import Error from '../components/UI/Error'
import Favorite from '../pages/My/Favorite'
import BasicSetting from '../pages/My/BasicSetting'

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
    path: RouterPathMap.ACCOUNT(),
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <Account />,
      },
    ],
  },
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
      {
        path: RouterPathMap.My(),
        element: <My />,
        children: [
          {
            index: true,
            element: <Favorite />,
          },
          {
            path: RouterPathMap.MY_BASIC_SETTINGS(),
            element: <BasicSetting />,
          },
        ],
      },
      {
        path: '/*',
        element: <Error />,
      },
    ],
  },
])

export default router
