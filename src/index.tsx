import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ToastProvider from './components/UI/Toast/ToastProvider'
import Toast from './components/UI/Toast'

import router from './router/'
import { queryClient } from './utils/queryClient'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ToastProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </ToastProvider>,
)
