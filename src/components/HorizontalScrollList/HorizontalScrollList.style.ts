import styled from 'styled-components'

// common
import { media } from '../../styles/breakpoints'

export const Container = styled.section`
  overflow-x: scroll;
  // 只會影響第一層項目
  display: flex;
  align-items: center;
  gap: 38px;
  // 隱藏 scroll 滾輪
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  overscroll-behavior: contain;

  ${media.phone} {
    gap: 20px;
  }
`

export const ItemWrapper = styled.div`
  opacity: 0.75;
  transition: all 0.25s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const Item = styled.div`
  width: 470px;
  height: 230px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  ${media.tablet} {
    width: calc(60vw);
  }

  ${media.phone} {
    width: 260px;
  }
`
