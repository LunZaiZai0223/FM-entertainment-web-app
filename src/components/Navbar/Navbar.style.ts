import styled from 'styled-components'

// common
import { svgStyle, StyledSvgProps } from '../../styles/common'
import { media } from '../../styles/breakpoints'

// assets
import { ReactComponent as AppIcon } from '../../assets/icons/icon_app.svg'
import { ReactComponent as NavMoviesIcon } from '../../assets/icons/icon_nav_movies.svg'
import { ReactComponent as NavTvsIcon } from '../../assets/icons/icon_nav_tv.svg'
import { ReactComponent as NavHomeIcon } from '../../assets/icons/icon_nav_home.svg'

export const StyledAppIcon = styled(AppIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`

export const StyledNavHomeIcon = styled(NavHomeIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`

export const StyledNavMoviesIcon = styled(NavMoviesIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`

export const StyledNavTvsIcon = styled(NavTvsIcon).attrs({})<StyledSvgProps>`
  ${(props: StyledSvgProps) => svgStyle(props)}
`

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 80%;
  border-radius: 12px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 24px;
  margin: 24px 0 0 16px;

  ${media.tablet} {
    position: sticky;
    flex-direction: row;
    height: auto;
    padding: 20px;
    margin: 24px;
    top: 0;
    z-index: 2;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${media.tablet} {
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
  }

  ${media.phone} {
    width: auto;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
`

export const AppHeader = styled.h1`
  svg {
    width: 32px;
    height: 32px;
  }
`
