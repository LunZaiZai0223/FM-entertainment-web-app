import styled from 'styled-components'

import { media } from '../../styles/breakpoints'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 24px;

  ${media.custom(1200)} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

export const Item = styled.div<{ shouldBeLarge?: boolean }>`
  height: 250px;
  grid-column: ${({ shouldBeLarge }) => `span ${shouldBeLarge && 2}`};

  ${media.custom(1200)} {
    grid-column: ${({ shouldBeLarge }) => `span ${shouldBeLarge && 1}`};
  }
`

export const ImageWrapper = styled.div`
  height: 174px;
  border-radius: 8px;
  overflow: hidden;
`
