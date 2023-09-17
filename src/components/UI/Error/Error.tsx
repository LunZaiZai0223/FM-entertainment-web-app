import { useNavigate } from 'react-router-dom'

import { RouterPathMap } from '../../../constants/routerPathMap.constant'

// components
import StyledButton from '../StyledButton'

// styles
import { Container, ErrorContent, ErrorWrapper } from './Error.style'

// assets
import { ReactComponent as ErrorIcon } from '../../../assets/icons/icon_error.svg'

const Error = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate({ pathname: RouterPathMap.HOME() })
  }

  return (
    <Container>
      <ErrorWrapper>
        <ErrorContent>
          <ErrorIcon />
          <span>Opps! Something went wrong.</span>
        </ErrorContent>
        <StyledButton type={'button'} styleType={'primary'} onClick={handleClick}>
          Back
        </StyledButton>
      </ErrorWrapper>
    </Container>
  )
}

export default Error
