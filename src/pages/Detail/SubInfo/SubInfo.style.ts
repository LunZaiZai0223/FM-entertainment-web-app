import styled from 'styled-components'

// common
import { DetailSubInfo } from '../../../styles/common'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h4`
  ${DetailSubInfo};
  color: ${({ theme }) => theme.colors.steelGrayBlue};
`

export const Content = styled.span`
  ${DetailSubInfo};
  color: ${({ theme }) => theme.colors.white};
`
