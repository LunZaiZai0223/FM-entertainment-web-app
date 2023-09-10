import styled from 'styled-components'

// common
import { DetailTitle, DetailTagline } from '../../styles/common'

export const Container = styled.div`
  display: flex;
  gap: 32px;
  padding: 32px;
`

export const MovieImageContainer = styled.div`
  width: 40%;
  min-height: 400px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
`

export const MovieContextContainer = styled.div`
  width: 60%;
`

export const Title = styled.h1`
  ${DetailTitle};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 12px;
`

export const Tagline = styled.h2`
  ${DetailTagline};
  color: ${({ theme }) => theme.colors.steelGrayBlue};
  margin: 0 0 16px;
`
