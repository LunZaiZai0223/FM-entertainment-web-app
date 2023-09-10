import { Outlet } from 'react-router-dom'

// libs
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// components
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import ScrollToTop from '../../components/UI/ScrollToTop'

// styles
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { Main } from './BasicLayout.style'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const BasicLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <Navbar />
          <Main>
            <SearchBar />
            <Outlet />
          </Main>
        </SkeletonTheme>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default BasicLayout
