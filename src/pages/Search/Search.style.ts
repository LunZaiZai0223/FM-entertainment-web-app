import styled from 'styled-components'

import {
  BodySubCaption,
  BodySubTitleRegular,
  CommonTitle,
  CardSubInfo,
  textOverflowEllipsis,
} from '../../styles/common'

import { media } from '../../styles/breakpoints'

import { wiggle } from '../../styles/animations'

export const Title = styled.h3`
  ${CommonTitle};
  margin: 0 0 32px;
  color: ${({ theme }) => theme.colors.white};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 8px;

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.phone} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Item = styled.li`
  display: block;
  cursor: pointer;
`

export const Card = styled.div`
  &:hover {
    animation: ${wiggle} 0.3s linear;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding: 28.125% 0;
  overflow: hidden;
  border-radius: 8px;

  img {
    cursor: pointer;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  > span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;

    span {
      height: 100%;
    }
  }
`

export const SubInfoContainer = styled.div`
  ${BodySubCaption};
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 10px 0 6px;

  svg {
    & path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`
export const SubInfoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${CardSubInfo};
`

export const InfoTitle = styled.h3`
  ${textOverflowEllipsis(1)};
  ${BodySubTitleRegular};
  color: ${({ theme }) => theme.colors.white};
`
