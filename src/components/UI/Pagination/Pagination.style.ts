import styled from 'styled-components'

// common
import { DetailListItem, DetailSubInfo } from '../../../styles/common'
import { media } from '../../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${DetailSubInfo};

  ${media.phone} {
    margin: 64px 0;
    ${DetailListItem};
  }
`

export const PaginationAction = styled.button<{ borderRadiusType: 'NEXT' | 'PREV' }>`
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.25ms ease-in, background-color 0.25ms ease-in;
  ${({ borderRadiusType }) =>
    borderRadiusType === 'NEXT'
      ? 'border-top-right-radius: 8px; border-bottom-right-radius: 8px;'
      : 'border-top-left-radius: 8px; border-bottom-left-radius: 8px;'}}

  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  
  ${media.phone} {
    padding: 4px 12px;
    ${DetailListItem};
  }
`

export const CurrentPaginationInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  ${DetailSubInfo};

  ${media.phone} {
    padding: 4px 12px;
    ${DetailListItem};
  }
`
