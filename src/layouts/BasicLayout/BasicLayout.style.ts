import styled from 'styled-components'

// common
import { media } from '../../styles/breakpoints'

export const Main = styled.main`
  width: 100%;
  padding: 24px 24px 24px 124px;

  ${media.tablet} {
    padding: 24px;
  }
`
