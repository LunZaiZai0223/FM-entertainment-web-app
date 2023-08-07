import styled from 'styled-components'

// common
import { DetailListItem } from '../../../styles/common'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Item = styled.div`
  ${DetailListItem};
  min-width: 120px;

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
