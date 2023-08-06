import { Outlet } from 'react-router-dom'

// libs
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// components
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'

// styles
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { Main } from './BasicLayout.style'

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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Main>
          <SearchBar />
          <Outlet />
        </Main>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default BasicLayout
