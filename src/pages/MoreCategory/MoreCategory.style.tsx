import styled from 'styled-components'
import { media } from '../../styles/breakpoints'

export const LoaderContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 24px;

  ${media.custom(1200)} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  > div {
    height: 174px;
  }
`
