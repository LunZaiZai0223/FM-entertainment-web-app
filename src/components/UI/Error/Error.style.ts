import styled from 'styled-components'

// common
import { DetailRating } from '../../../styles/common'

export const Container = styled.div`
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ErrorWrapper = styled.div`
  ${DetailRating};
  min-width: 300px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 40px;
    height: 40px;
  }
`

export const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 0 12px;
`
