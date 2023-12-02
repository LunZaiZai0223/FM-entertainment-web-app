import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

// components
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import TopProgressBar from '../../components/TopProgressBar'
import ScrollToTop from '../../components/UI/ScrollToTop'

// styles
import { Main } from './BasicLayout.style'
import { SkeletonTheme } from 'react-loading-skeleton'

const BasicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Suspense fallback={<TopProgressBar />}>
          <Navbar />
          <Main>
            <SearchBar />
            <Outlet />
          </Main>
        </Suspense>
      </SkeletonTheme>
    </>
  )
}

export default BasicLayout
