import styled from 'styled-components'

// common
import { DetailTagline, DetailTitle, DetailListItem } from '../../../styles/common'

export const Container = styled.div``

export const Title = styled.h1`
  ${DetailTitle};
  margin: 0 0 12px;
`

export const BlockTitle = styled.h4`
  ${DetailTagline};
`

export const BlockText = styled.span`
  ${DetailListItem};
`

export const Images = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  > div {
    flex: 1;
  }
`

export const Block = styled.div`
  margin: 0 0 12px;
`
