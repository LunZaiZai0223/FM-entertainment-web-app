import React from 'react'

// components
import StyledButton from '../../../components/UI/StyledButton'

// styles
import { Container, Item } from './RelatedLink.style'

interface Props {
  linkList: { label: string; icon?: React.ReactNode; targetUrl: string }[]
}

const RelatedLink = ({ linkList }: Props) => {
  return (
    <Container>
      {linkList.map(({ label, icon, targetUrl }) => {
        return (
          <StyledButton key={targetUrl}>
            <Item>
              <a href={targetUrl} target='_blank' rel='noreferrer'>
                {label}
                {icon && icon}
              </a>
            </Item>
          </StyledButton>
        )
      })}
    </Container>
  )
}

export default RelatedLink
