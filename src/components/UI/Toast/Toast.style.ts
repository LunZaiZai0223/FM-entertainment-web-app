import styled from 'styled-components'
import { motion } from 'framer-motion'

import { DetailListItem } from '../../../styles/common'

export const ToastCardContainer = styled(motion.div)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.tealBlue};
  border-radius: 4px;
  width: 320px;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.deepTurquoiseAlpha60}};
`

export const ToastCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ToastCardBody = styled.div`
  padding: 6px;
`

export const ToastCardCloseButton = styled.button`
  align-self: flex-start;

  svg {
    width: 14px;
    height: 16px;
  }
`

export const ToastContent = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${DetailListItem};
`
