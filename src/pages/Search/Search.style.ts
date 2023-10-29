import styled from 'styled-components'

import { CommonTitle } from '../../styles/common'

import { media } from '../../styles/breakpoints'

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
