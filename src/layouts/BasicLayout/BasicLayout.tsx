import { Outlet } from 'react-router-dom'

// libs
import { ThemeProvider } from 'styled-components'

// components
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'

// styles
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { Main } from './BasicLayout.style'

const BasicLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Main>
        <SearchBar />
        <Outlet />
      </Main>
    </ThemeProvider>
  )
}

export default BasicLayout
