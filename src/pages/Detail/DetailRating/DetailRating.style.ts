import styled from 'styled-components'

// common
import { DetailRating } from '../../../styles/common'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 12px;
`

export const RatingNum = styled.strong`
  ${DetailRating};
  color: ${({ theme }) => theme.colors.white};
`
