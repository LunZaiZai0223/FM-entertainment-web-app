import styled from 'styled-components'

// theme
import theme from '../../../styles/theme'

import { StyleType } from './StyledButton'

// 參照不同 styleType 給予不同的顏色
const getBackgroundColor = (styleType: StyleType) => {
  switch (styleType) {
    case 'primary':
      return theme.colors.steelBlue

    default:
      return theme.colors.steelBlue
  }
}

const getColor = (styleType: StyleType) => {
  switch (styleType) {
    case 'primary':
      return theme.colors.white

    default:
      return theme.colors.white
  }
}

const getHoverBackgroundColor = (styleType: StyleType) => {
  switch (styleType) {
    case 'primary':
      return theme.colors.white

    default:
      return theme.colors.white
  }
}

const getHoverColor = (styleType: StyleType) => {
  switch (styleType) {
    case 'primary':
      return theme.colors.black

    default:
      return theme.colors.black
  }
}

export const Button = styled.button<{
  disabled?: string
  styleType: StyleType
}>`
  background-color: ${({ styleType }) => getBackgroundColor(styleType)};
  color: ${({ styleType }) => getColor(styleType)};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;

  a {
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  &:hover {
    background-color: ${({ styleType }) => getHoverBackgroundColor(styleType)};
    color: ${({ styleType }) => getHoverColor(styleType)};
  }
`
