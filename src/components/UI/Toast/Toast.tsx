import { useRef, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'

// hooks
import useToastContext from './useToastContext'

// assets
import { ReactComponent as CloseIcon } from '../../../assets/icons/icon_close_without_border.svg'

// styles
import { ToastCardContainer, ToastCard, ToastCardBody, ToastCardCloseButton } from './Toast.style'

interface IToastItem {
  children: ReactNode
  onClose: () => void
}

const toastRoot = document.querySelector('#toasts-portal') as HTMLDivElement

const ToastItem = ({ children, onClose }: IToastItem) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      <ToastCardContainer
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.5 }}
      >
        <ToastCard>
          <ToastCardBody>{children}</ToastCardBody>
          <ToastCardCloseButton onClick={onClose}>
            <CloseIcon />
          </ToastCardCloseButton>
        </ToastCard>
      </ToastCardContainer>
    </AnimatePresence>
  )
}

const Toast = () => {
  const { toasts, removeToast } = useToastContext()
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  const handleRemoveTargetToast = (removedId: string) => {
    removeToast(removedId)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const el = elRef.current!
    toastRoot.appendChild(el)
    return () => {
      toastRoot.removeChild(el)
    }
  }, [toasts])

  return createPortal(
    <>
      {toasts.map((item) => {
        return (
          <ToastItem
            key={item.id}
            onClose={() => {
              handleRemoveTargetToast(item.id)
            }}
          >
            {item.content}
          </ToastItem>
        )
      })}
    </>,
    elRef.current,
  )
}

export default Toast
