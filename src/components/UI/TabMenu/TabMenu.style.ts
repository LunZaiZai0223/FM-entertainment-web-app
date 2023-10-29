/* eslint-disable indent */
import styled from 'styled-components'

import { DetailListItem } from '../../../styles/common'

export const TabListContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.softWhiteAlpha10};
`

export const TabListWrapper = styled.ul`
  display: flex;
  position: relative;
`

export const TabItemContainer = styled.li<{ isActive?: boolean }>`
  display: inline-flex;
  cursor: pointer;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightSkyBlue : theme.colors.scaleGray};

  > * {
    color: inherit !important;
  }

  a {
    ${DetailListItem};
    padding: 12px 16px;
    text-decoration: unset;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.lightSkyBlue : theme.colors.scaleGray};
  }
`
export const TabAnchor = styled.span<{ width: number; left: number }>`
  position: absolute;
  height: 2px;
  bottom: 0;
  width: ${({ width }) => `${width}px`};
  left: ${({ left }) => `${left}px`};
  background-color: ${({ theme }) => theme.colors.lightSkyBlue};
  transition: all 0.25s;
`
