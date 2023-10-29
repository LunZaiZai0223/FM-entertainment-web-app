import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

// libs
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// components
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import TopProgressBar from '../../components/TopProgressBar'
import ScrollToTop from '../../components/UI/ScrollToTop'
import Toast from '../../components/UI/Toast'

// styles
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { Main } from './BasicLayout.style'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const BasicLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <Suspense fallback={<TopProgressBar />}>
            <Navbar />
            <Main>
              <SearchBar />
              <Outlet />
            </Main>
          </Suspense>
        </SkeletonTheme>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default BasicLayout
