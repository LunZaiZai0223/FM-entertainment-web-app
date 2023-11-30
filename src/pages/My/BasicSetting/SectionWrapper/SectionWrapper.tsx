import { ReactNode } from 'react'

// styles
import { Section } from './SectionWrapper.style'

type Props = {
  children: ReactNode
}

const SectionWrapper = ({ children }: Props) => {
  return <Section>{children}</Section>
}

export default SectionWrapper
