import styled, { css } from 'styled-components'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface StyledNavLinkProps extends NavLinkProps {
  activeStyle?: typeof css
}

export const StyledNavLinkStyle = styled(NavLink)<StyledNavLinkProps>`
  color: inherit;
  text-decoration: none;
`
