import styled from 'styled-components'

// assets
import { ReactComponent as ArrowLeft } from '../../assets/icons/icon_arrow_left.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/icon_arrow_right.svg'

import { media } from '../../styles/breakpoints'

export const ArrowLeftIcon = styled(ArrowLeft)``
export const ArrowRightIcon = styled(ArrowRight)``

export const SlideController = styled.button<{ isLeft: boolean }>`
  position: absolute;
  display: none;
  ${({ isLeft }) => (isLeft ? 'left: 0;' : 'right: 0;')}
  top: 0;
  z-index: 2;
  height: 100%;
  width: 4%;
  transition: 0.1s ease-in;

  &:hover {
    width: 8%;
    background-color: hsla(0, 0%, 8%, 0.5);
    svg {
      & path {
        fill: white;
      }
      transform: scale(1.2);
    }
  }

  ${media.phone} {
    display: block;
    width: 8%;
    background-color: hsla(0, 0%, 8%, 0.5);
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const SlidePagination = styled.ul`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: 0.2s ease-in;
`

export const SlidePaginationItem = styled.li<{ isActive: boolean }>`
  display: inline-block;
  height: 2px;
  width: 12px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.gray)};
`

export const SlideContainer = styled.section`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    ${SlideController} {
      display: block;
    }
    ${SlidePagination} {
      opacity: 1;
    }
  }
`
