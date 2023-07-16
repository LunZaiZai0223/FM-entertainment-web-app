import styled from 'styled-components'

// common styles
import { BodyNavigate } from '../../../styles/common'
import { wiggle } from '../../../styles/animations'

export const Container = styled.div<{ isMain?: boolean; mainColor?: string }>`
  background-color: ${({ theme, isMain, mainColor }) =>
    isMain ? mainColor || theme.colors.tealBlue : theme.colors.secondary};
  border-radius: 8px;
  padding: 32px;
  cursor: pointer;

  &:hover {
    animation: ${wiggle} 0.3s linear;
  }
`

export const Wrapper = styled.div`
  ${BodyNavigate};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`
