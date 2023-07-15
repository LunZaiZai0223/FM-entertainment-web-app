import styled from 'styled-components'

import {
  StyledSvgProps,
  svgStyle,
  textOverflowEllipsis,
  BodySubTitle,
  BodySubCaption,
  BodySubTitleRegular,
} from '../../../styles/common'

// assets
import { ReactComponent as MovieIcon } from '../../../assets/icons/icon_nav_movies.svg'

interface ContainerProps {
  shouldUseAbsolute?: boolean
  top?: string
  right?: string
  bottom?: string
  left?: string
}

// assets
export const Container = styled.div<ContainerProps>`
  position: ${({ shouldUseAbsolute }) => (shouldUseAbsolute ? 'absolute' : 'relative')};
  ${({ shouldUseAbsolute }) => shouldUseAbsolute && 'bottom: 16px; left: 16px;'};
`

export const InfoTitle = styled.h3<{ isMain?: boolean }>`
  ${textOverflowEllipsis(1)};
  ${({ isMain }) => (isMain ? BodySubTitle : BodySubTitleRegular)};
  color: ${({ theme }) => theme.colors.white};
`

export const SubInfoContainer = styled.div`
  ${BodySubCaption};
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 10px 0 6px;
`

export const SubInfoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export const SubInfoMovieIcon = styled(MovieIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`
