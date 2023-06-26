import { css } from 'styled-components'

export interface StyledSvgProps {
  width?: string
  height?: string
  defaultcolor?: string
  hovercolor?: string
}

// ref.https://vaadarsh8178.medium.com/handling-custom-svgs-in-react-using-styled-components-30d2739ff4cb
export const svgStyle = ({ height, width, defaultcolor, hovercolor }: StyledSvgProps) => {
  return css`
    width: ${width || '16px'};
    height: ${height || '16px'};
    cursor: pointer;

    & path {
      fill: ${({ theme }) => defaultcolor || theme.colors.fieryRed};
    }

    &:hover {
      & path {
        fill: ${hovercolor || defaultcolor};
      }
    }
  `
}
