import React from 'react'

// styles
import { Container } from './SubInfoContainer.style'

interface Props {
  children: React.ReactNode
}

const SubInfoContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default SubInfoContainer
