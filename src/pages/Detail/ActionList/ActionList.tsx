import React from 'react'

import { Container, ActionButton } from './ActionList.style'

interface Props {
  list: { item: React.ReactNode; handler: () => void }[]
}

const ActionList = ({ list }: Props) => {
  const renderButtons = () => {
    return list.map(({ item, handler }, index) => {
      return (
        <li key={index}>
          <ActionButton onClick={handler}>{item}</ActionButton>
        </li>
      )
    })
  }
  return <Container>{renderButtons()}</Container>
}

export default ActionList
