import styled from 'styled-components'

// common
import { media } from '../../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  margin: 0 0 24px;

  ${media.tablet} {
    justify-content: space-between;
    gap: unset;
  }

  ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`
