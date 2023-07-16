import { keyframes } from 'styled-components'

export const wiggle = keyframes`
  0%{ transform: skewY(0deg) }
  50% { transform: skewY(-3deg) }
  100% { transform: skewY(0deg) }
`
