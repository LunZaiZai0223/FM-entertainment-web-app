import styled from 'styled-components'

// common
import { DetailSubInfo } from '../../../styles/common'

export const Title = styled.h4`
  ${DetailSubInfo};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 8px;
`
