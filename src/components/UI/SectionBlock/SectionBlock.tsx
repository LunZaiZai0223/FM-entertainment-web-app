import React from 'react'

// styles
import { Container } from './SectionBlock.style'

export type MarginLevel = 'Large' | 'Medium' | 'Small' | 'None'

interface Props {
  children: React.ReactNode
  marginLevel?: MarginLevel
}

const SectionBlock = ({ children, marginLevel = 'Medium' }: Props) => {
  return <Container marginLevel={marginLevel}>{children}</Container>
}

export default SectionBlock
