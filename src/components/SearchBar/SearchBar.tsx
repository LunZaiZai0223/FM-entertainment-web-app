import React from 'react'

// components
import StyledButton from '../UI/StyledButton'

// styles
import { Input, StyledSearchIcon, Controller, Container } from './SearchBar.style'

// theme
import theme from '../../styles/theme'

const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Controller>
          <StyledSearchIcon width={'32px'} height={'32px'} defaultcolor={theme.colors.white} />
          <Input placeholder='Search for something...' />
          <StyledButton type='submit'>Search</StyledButton>
        </Controller>
      </form>
    </Container>
  )
}

export default SearchBar
