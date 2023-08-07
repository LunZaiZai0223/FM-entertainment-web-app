import styled from 'styled-components'

// common
import { DetailListItem } from '../../../../styles/common'

export const ItemCard = styled.li<{ isSecondary?: boolean }>`
  ${DetailListItem};
  text-align: center;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.white : theme.colors.black)};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isSecondary }) =>
    isSecondary ? 'transparent' : theme.colors.white};
`
