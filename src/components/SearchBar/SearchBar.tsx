import React, { useEffect, useState } from 'react'
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom'

// components
import StyledButton from '../UI/StyledButton'

// constants
import { RouterPathMap } from '../../constants/routerPathMap.constant'
import { MEDIA_TYPE } from '../../constants/mediaTypes.constants'

// styles
import { Input, StyledSearchIcon, Controller, Container } from './SearchBar.style'

// theme
import theme from '../../styles/theme'

// local helpers
const getCurrentSearchBarConfig = (pathname: string, currentState: string) => {
  if (pathname.includes(RouterPathMap.MOVIES()) || currentState === MEDIA_TYPE.MOVIE) {
    return {
      placeHolder: 'Search for movies',
      type: MEDIA_TYPE.MOVIE,
    }
  } else if (pathname.includes(RouterPathMap.TVS()) || currentState === MEDIA_TYPE.TV_SERIES) {
    return {
      placeHolder: 'Search for TV series',
      type: MEDIA_TYPE.TV_SERIES,
    }
  } else {
    return {
      placeHolder: 'Search for movies or TV series',
      type: MEDIA_TYPE.MULTI,
    }
  }
}

const SearchBar = () => {
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const { placeHolder, type } = getCurrentSearchBarConfig(pathname, state?.type || '')
  const [enteredSearchValue, setEnteredSearchValue] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(
      {
        pathname: RouterPathMap.SEARCH(),
        search: createSearchParams({
          q: enteredSearchValue,
        }).toString(),
      },
      { state: { type } },
    )
  }

  const handleEnterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearchValue(event.target.value.trim())
  }

  useEffect(() => {
    setEnteredSearchValue('')
  }, [pathname])

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Controller>
          <StyledSearchIcon width={'32px'} height={'32px'} defaultcolor={theme.colors.white} />
          <Input placeholder={placeHolder} value={enteredSearchValue} onChange={handleEnterInput} />
          <StyledButton type='submit'>Search</StyledButton>
        </Controller>
      </form>
    </Container>
  )
}

export default SearchBar
