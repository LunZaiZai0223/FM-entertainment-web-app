import styled from 'styled-components'

import { DetailSubInfo, BodySubTitle } from '../../../styles/common'
import { media } from '../../../styles/breakpoints'

export const Container = styled.div``

export const SwitchButtonListWrapper = styled.div``

export const BasicInfoContainer = styled.div`
  margin: 36px 0 0;
  display: flex;
  padding: 32px;
  gap: 22px;
  border-radius: 4px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.transparentBlackAlpha10};
  background-color: ${({ theme }) => theme.colors.nightshadeBlue}};

  ${media.tablet} {
    flex-direction: column;
  }
`

export const EmptyMessage = styled.p`
  ${DetailSubInfo};
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.white};
`

export const MediaContainer = styled.div`
  margin: 20px 0;

  > h3 {
    ${BodySubTitle};
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const MediaList = styled.ul`
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
