import styled from 'styled-components'

export const Container = styled.ul`
  list-style-type: unset;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ActionButton = styled.button`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  transition: background-color 0.25s;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover,
  :active {
    background-color: ${({ theme }) => theme.colors.deepGray};
  }
`
