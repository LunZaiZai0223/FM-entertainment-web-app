import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg) scale(0.8) }
  50% { transform: rotate(360deg) scale(1.2) }
  100% { transform: rotate(720deg) scale(0.8) }
`

const ball1 = (color: string) => keyframes`
  0% {
    box-shadow: 30px 0 0 ${color};
  }
  50% {
    box-shadow: 0 0 0 ${color};
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 ${color};
    margin-bottom: 10px;
  }
`

const ball2 = (color: string) => keyframes`
  0% {
    box-shadow: 30px 0 0 ${color};
  }
  50% {
    box-shadow: 0 0 0 ${color};
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 ${color};
    margin-top: 0;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Load = styled.span`
  animation: ${rotate} 1s infinite;
  height: 50px;
  width: 50px;

  &:before,
  :after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }

  &:before {
    animation: ${({ theme }) => ball1(theme.colors.fieryRed)} 1s infinite;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.fieryRed};
    margin-bottom: 10px;
  }

  &:after {
    animation: ${({ theme }) => ball2(theme.colors.white)} 1s infinite;
    background-color: ${({ theme }) => theme.colors.fieryRed};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.white};
  }
`
