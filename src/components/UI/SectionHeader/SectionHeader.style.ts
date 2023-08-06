import styled from 'styled-components'
import { Link } from 'react-router-dom'

// commons
import { BodyTitle, BodyCaption, BodyAction } from '../../../styles/common'

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 24px;
`

export const Title = styled.h2`
  ${BodyTitle};
  color: ${({ theme }) => theme.colors.white};
`

export const CaptionWrapper = styled.div<{ isSecondary?: boolean }>`
  border: 2px solid ${({ theme }) => theme.colors.lightGraySilver};
  text-align: center;
  padding: 2px 8px;
  border-radius: 4px;
  ${({ isSecondary, theme }) => isSecondary && `background-color: ${theme.colors.white}`}
`

export const Caption = styled.span<{ isSecondary?: boolean }>`
  ${BodyCaption};
  text-transform: uppercase;
  color: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.black : theme.colors.white)};
`

export const ActionLink = styled(Link)`
  ${BodyAction};
  margin: 0 0 0 auto;
  color: ${({ theme }) => theme.colors.steelBlue};
  text-decoration: none;
`
