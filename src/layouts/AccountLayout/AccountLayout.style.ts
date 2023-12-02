import styled from 'styled-components'

import { media } from '../../styles/breakpoints'

export const Container = styled.main`
  height: 100%;
`

export const BackgroundContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 0;

  ${media.tablet} {
    display: none;
  }
`

export const BackgroundWrapper = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  opacity: 0.5;

  img {
    min-height: 100%;
    min-width: 100%;
  }
`
