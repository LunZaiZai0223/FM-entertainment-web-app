import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import ToastProvider from './components/UI/Toast/ToastProvider'

import router from './router/'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>,
)
