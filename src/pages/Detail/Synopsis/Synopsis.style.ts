import styled from 'styled-components'

// common
import { DetailSubInfo, DetailSubInfoContent } from '../../../styles/common'

export const Container = styled.div`
  margin: 0 0 24px;
`

export const Title = styled.h4`
  ${DetailSubInfo};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 8px;
`

export const Content = styled.p`
  ${DetailSubInfoContent};
  color: ${({ theme }) => theme.colors.white};
`
