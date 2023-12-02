import styled from 'styled-components'

import { media } from '../../styles/breakpoints'
import { BodyTitle } from '../../styles/common'

export const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 450px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.tablet} {
    flex-direction: row;
    max-width: unset;
    justify-content: normal;
    align-items: normal;
  }
`

export const FormWrapper = styled.div`
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.transparentBlackAlpha75};
  border-radius: 4px;
  width: 100%;
  z-index: 1;
`

export const FormTitle = styled.h1`
  ${BodyTitle};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 28px;
`

export const ThirdOauthList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      width: 100%;
      cursor: pointer;
    }

    svg {
      & path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
