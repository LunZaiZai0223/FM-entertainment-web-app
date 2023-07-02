import React from 'react'

import { StyledNavLinkStyle } from './StyledNavLink.style'
import { NavLinkProps } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  navLinkProps: NavLinkProps
}

const StyledNavLink = ({ children, navLinkProps }: Props) => {
  return <StyledNavLinkStyle {...navLinkProps}>{children}</StyledNavLinkStyle>
}

export default StyledNavLink
