import styled from 'styled-components'

import theme from '../../../../styles/theme'

const handleBorderColor = (isActive: boolean, isHover: boolean) => {
  if (isHover) {
    return isActive ? theme.colors.lightSkyBlue : theme.colors.white
  }

  return isActive ? theme.colors.lightSkyBlue : theme.colors.softWhiteAlpha10
}

export const Container = styled.div``

export const FormControl = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  background-color: unset;
  padding: 16px 14px;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${({ isActive }) => handleBorderColor(isActive, false)};

  &:hover {
    border-color: ${({ isActive }) => handleBorderColor(isActive, true)};
  }
`

export const LabelWrapper = styled.div<{ isActive: boolean }>`
  z-index: 1;
  max-width: calc(100% - 24px);
  position: absolute;
  left: 0;
  top: 0;
  transform: ${({ isActive }) =>
    isActive ? 'translate(14px, -8px) scale(0.8)' : 'translate(14px, 16px) scale(1)'};
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ isActive }) => (isActive ? '0 10px' : 0)};
`
export const LabelContent = styled.label``

export const InputWrapper = styled.div`
  input {
    background-color: unset;
    outline: none;
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  margin: 18px 0;
`
