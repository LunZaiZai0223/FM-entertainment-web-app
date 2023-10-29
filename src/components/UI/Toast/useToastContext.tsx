import { useContext, ReactNode } from 'react'

import { ToastContext } from './ToastProvider'

// local helpers
// ref. https://stackblitz.com/edit/react-custom-toast-z3dp6f?file=Toast%2FToastProvider.js,Toast%2FToastContext.js
const generateId = () => {
  const first = (Math.random() * 46656) | 0
  const second = (Math.random() * 46656) | 0
  const firstId = ('000' + first.toString(36)).slice(-3)
  const secondId = ('000' + second.toString(36)).slice(-3)

  return firstId + secondId
}

const useToastContext = () => {
  const toastContext = useContext(ToastContext)

  // 協助日後 debug，因為 context 只能在當前 provider 子層使用
  if (!toastContext) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }

  const { toasts, setToasts } = toastContext

  const addToast = (content: ReactNode) => {
    setToasts((prev) => [...prev, { id: generateId(), content }])
  }

  const removeToast = (removedToastId: string) => {
    setToasts((prev) => prev.filter(({ id }) => id !== removedToastId))
  }

  return {
    toasts,
    addToast,
    removeToast,
  }
}

export default useToastContext
