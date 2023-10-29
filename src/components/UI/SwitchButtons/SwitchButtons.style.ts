import styled from 'styled-components'
import Theme from '../../../styles/theme'

const getSwitchButtonItemStyleByStatus = (theme: typeof Theme, isActive?: boolean) => {
  const { colors } = theme

  if (isActive) {
    return {
      color: colors.white,
      backgroundColor: colors.deepSpaceBlue,
      borderColor: colors.softGrayAlpha20,
      boxShadow: `0 2px 5px ${colors.transparentBlackAlpha10}`,
    }
  } else {
    return {
      color: colors.mediumGray,
      backgroundColor: colors.midnightBlueDark,
      borderColor: colors.darkGrayAlpha20,
      boxShadow: 'none',
    }
  }
}

export const SwitchButtonItem = styled.li<{ isActive?: boolean }>`
  border-radius: 100px 0 0 100px;
  padding: 12px;
  transition: all 0.2s;
  cursor: pointer;

  > * {
    color: inherit;
  }

  ${({ theme, isActive }) => {
    const styles = getSwitchButtonItemStyleByStatus(theme, isActive)
    return `
      background-color: ${styles.backgroundColor};
      border: 1px solid ${styles.borderColor};
      box-shadow: ${styles.boxShadow};
      color: ${styles.color};
    `
  }}

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SwitchButtonList = styled.ul`
  display: flex;
  align-items: center;

  ${SwitchButtonItem}: first-child {
    border-radius: 100px 0 0 100px;
  }

  ${SwitchButtonItem}: last-child {
    border-radius: 0 100px 100px 0;
  }
`
