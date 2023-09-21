import styled from 'styled-components'

// common
import { DetailListItem } from '../../../styles/common'
import { media } from '../../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 40px;

  ${media.tablet} {
    flex-wrap: wrap;
  }
`

export const Item = styled.div`
  ${DetailListItem};
  min-width: 150px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};

    &:hover {
      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  }
`
