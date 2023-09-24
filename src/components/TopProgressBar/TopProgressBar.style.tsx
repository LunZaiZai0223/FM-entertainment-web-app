import styled from 'styled-components'

export const ProgressBar = styled.div<{ percent: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ theme }) => theme.colors.fieryRed};
`
