import styled from 'styled-components'
import { DetailSubInfo } from '../../../styles/common'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${DetailSubInfo};
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
`

export const CurrentPaginationInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  ${DetailSubInfo};
`
