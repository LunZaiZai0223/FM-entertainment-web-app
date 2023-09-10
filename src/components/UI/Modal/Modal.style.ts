import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
  z-index: 2;
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
