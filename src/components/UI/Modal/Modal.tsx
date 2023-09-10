import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// styles
import { ModalBackdrop, ModalContainer } from './Modal.style'

interface Props {
  children: React.ReactNode
  onCloseModal?: () => void
}

const Modal = ({ children, onCloseModal }: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null)
  const rootModalRef = useRef(document.createElement('div'))

  const handleClickOutsideCloseModal = (event: React.MouseEvent<HTMLElement>) => {
    const targetEle = event.target as Element
    if (targetEle.contains(containerRef.current)) {
      if (onCloseModal) {
        onCloseModal()
      }
    }
  }

  useEffect(() => {
    const modalTagEle = document.getElementById('modal-root')

    modalTagEle?.append(rootModalRef.current)

    return () => {
      modalTagEle?.removeChild(rootModalRef.current)
    }
  }, [])

  return createPortal(
    <>
      <ModalBackdrop {...(onCloseModal && { onClick: onCloseModal })} />
      <ModalContainer
        {...(onCloseModal && { onClick: handleClickOutsideCloseModal })}
        ref={containerRef}
      >
        {children}
      </ModalContainer>
    </>,
    rootModalRef.current,
  )
}

export default Modal
