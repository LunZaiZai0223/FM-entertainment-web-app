import styled from 'styled-components'

// common
import { StyledSvgProps, svgStyle } from '../../styles/common'

// assets
import { ReactComponent as SearchIcon } from '../../assets/icons/icon_search.svg'

export const Container = styled.div`
  margin: 0 0 40px;
`

export const Form = styled.form``

export const Controller = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const StyledSearchIcon = styled(SearchIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts};
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.fieryRed};
  padding: 0 0 8px;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.steelGrayBlue};
    font-family: inherit;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`
