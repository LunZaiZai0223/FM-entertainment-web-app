import React from 'react'

import { StyledLinkStyle } from './StyledLink.style'
import { LinkProps } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  linkProps: LinkProps
}

const StyledLink = ({ children, linkProps }: Props) => {
  return <StyledLinkStyle {...linkProps}>{children}</StyledLinkStyle>
}

export default StyledLink
