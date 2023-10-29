import styled from 'styled-components'

import { BodyNavigate, DetailSubInfo } from '../../../../styles/common'

export const SummaryContainer = styled.div`
  flex: 1;

  > h3 {
    ${BodyNavigate};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 12px 0 0;

  > li {
    display: flex;
    align-items: center;
    gap: 12px;

    > span {
      ${DetailSubInfo};
    }
  }
`

export const DetailGenreSpot = styled.span<{ backgroundColor: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
`
