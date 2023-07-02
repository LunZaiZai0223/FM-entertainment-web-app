import styled from 'styled-components'

import { MarginLevel } from './SectionBlock'

interface ContainerProps {
  marginLevel: MarginLevel
}

const getMarginByLevel = (marginLevel: MarginLevel) => {
  switch (marginLevel) {
    case 'Large':
      return '0 0 40px'

    case 'Medium':
      return '0 0 20px'

    case 'Small':
      return '0 0 10px'

    case 'None':
      return '0'
  }
}

export const Container = styled.section<ContainerProps>`
  margin: ${({ marginLevel }) => getMarginByLevel(marginLevel)};
`
