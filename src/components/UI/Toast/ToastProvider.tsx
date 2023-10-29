import React, { createContext, useState, useMemo } from 'react'

export interface IToast {
  id: string
  content: React.ReactNode
}

interface ToastProviderProps {
  children: React.ReactNode
}

interface IToastContextValue {
  toasts: IToast[]
  setToasts: React.Dispatch<React.SetStateAction<IToast[]>>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ToastContext = createContext<IToastContextValue | null>(null)

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<IToast[]>([])
  const contextValue = useMemo(() => ({ toasts, setToasts }), [toasts])

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>
}

export default ToastProvider
