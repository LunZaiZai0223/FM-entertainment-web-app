import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  background-color: ${({ theme }) => theme.colors.black};

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`
