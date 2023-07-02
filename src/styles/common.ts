import { css } from 'styled-components'

export interface StyledSvgProps {
  width?: string
  height?: string
  defaultcolor?: string
  hovercolor?: string
}

interface BasicTypographyProps {
  fontSize: string
  fontWeight: number
  lineHeight?: number | string
  letterSpace?: number
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

/** 超過 x 行 ...*/
export const textOverflowEllipsis = (lineClamp: number) => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineClamp};
    box-sizing: border-box;
  `
}

// Typography
/** 基本的字體函式 */
const BasicTypography = ({
  fontSize,
  fontWeight,
  letterSpace,
  lineHeight,
}: BasicTypographyProps) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    ${letterSpace && `letter-space: ${letterSpace}`};
    ${lineHeight && `line-height: ${lineHeight}`};
  `
}

/** 回傳 css 讓 styled-component 可以套用重複的字型屬性 */
export const BodyTitle = BasicTypography({ fontSize: '32px', fontWeight: 400 })
export const BodySubTitle = BasicTypography({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '1.5',
})
export const BodySubTitleRegular = BasicTypography({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '1.25',
})
export const BodyCaption = BasicTypography({ fontSize: '12px', fontWeight: 400, lineHeight: 1.5 })
export const BodySubCaption = BasicTypography({ fontSize: '15px', fontWeight: 300 })
export const BodyAction = BasicTypography({ fontSize: '12px', fontWeight: 500, lineHeight: '16px' })
