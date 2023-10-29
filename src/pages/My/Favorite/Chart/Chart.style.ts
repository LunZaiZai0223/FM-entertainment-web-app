import styled from 'styled-components'

import { CardSubInfo } from '../../../../styles/common'
import { media } from '../../../../styles/breakpoints'

export const ChartContainer = styled.div`
  width: 500px;
  height: 300px;

  ${media.tablet} {
    width: 100%;
  }
`

export const TooltipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 16px;
  opacity: 0.85;
  max-width: 40vw;

  > p {
    ${CardSubInfo};
    margin: 0 0 6px;
  }

  p {
    &:last-child {
      margin: 0;
    }
  }
`
