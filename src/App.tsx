import { ThemeProvider } from 'styled-components'

import BasicLayout from './layouts/BasicLayout'

import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicLayout />
    </ThemeProvider>
  )
}

export default App
