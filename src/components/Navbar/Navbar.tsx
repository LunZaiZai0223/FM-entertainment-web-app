import { useLocation } from 'react-router-dom'

// components
import Avatar from '../Avatar'
import StyledLink from '../UI/StyledLink'

// paths
import { RouterPathMap } from '../../constants/routerPathMap.constant'

// styles
import {
  Nav,
  NavList,
  NavItem,
  AppHeader,
  StyledAppIcon,
  StyledNavHomeIcon,
  StyledNavMoviesIcon,
  StyledNavTvsIcon,
} from './Navbar.style'
import theme from '../../styles/theme'

const Navbar = () => {
  const location = useLocation()
  const NAV_LIST = [
    {
      icon: (
        <StyledNavHomeIcon
          width={'20px'}
          height={'20px'}
          defaultcolor={
            location.pathname === RouterPathMap.HOME() ? theme.colors.white : theme.colors.steelBlue
          }
          hovercolor={theme.colors.fieryRed}
        />
      ),
      path: RouterPathMap.HOME(),
    },
    {
      icon: (
        <StyledNavMoviesIcon
          width={'20px'}
          height={'20px'}
          defaultcolor={
            location.pathname.includes(RouterPathMap.MOVIES())
              ? theme.colors.white
              : theme.colors.steelBlue
          }
          hovercolor={theme.colors.fieryRed}
        />
      ),
      path: RouterPathMap.MOVIES(),
    },
    {
      icon: (
        <StyledNavTvsIcon
          width={'20px'}
          height={'20px'}
          defaultcolor={
            location.pathname.includes(RouterPathMap.TVS())
              ? theme.colors.white
              : theme.colors.steelBlue
          }
          hovercolor={theme.colors.fieryRed}
        />
      ),
      path: RouterPathMap.TVS(),
    },
  ]

  return (
    <Nav datatype='Navbar'>
      <AppHeader>
        <StyledLink linkProps={{ to: RouterPathMap.HOME() }}>
          <StyledAppIcon width={'32px'} height={'32px'} defaultcolor={theme.colors.fieryRed} />
        </StyledLink>
      </AppHeader>
      <NavList>
        {NAV_LIST.map(({ icon, path }, index) => {
          return (
            <NavItem key={index}>
              <StyledLink linkProps={{ to: path }}>{icon}</StyledLink>
            </NavItem>
          )
        })}
      </NavList>
      <Avatar />
    </Nav>
  )
}

export default Navbar
