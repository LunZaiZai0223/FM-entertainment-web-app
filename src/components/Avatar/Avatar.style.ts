import styled from 'styled-components'

export const AvatarContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: black;
  overflow: hidden;
`

export const AvatarSrc = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`
