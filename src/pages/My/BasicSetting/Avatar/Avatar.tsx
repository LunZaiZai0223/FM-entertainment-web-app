import { useRef } from 'react'

// components
import Skeleton from 'react-loading-skeleton'
import StyledButton from '../../../../components/UI/StyledButton'

// styles
import { AvatarContainer, ButtonWrapper, Container } from './Avatar.style'

const Avatar = () => {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleClickBtn = () => {
    inputRef.current?.click()
  }

  return (
    <Container>
      <AvatarContainer>
        <Skeleton />
      </AvatarContainer>
      <ButtonWrapper>
        <label htmlFor='avatarFile'>
          <StyledButton type={'button'} styleType={'primary'} onClick={handleClickBtn}>
            <input type='file' accept='.jpg,.png,.gif' hidden id={'avatarFile'} ref={inputRef} />
            Choose one picture
          </StyledButton>
        </label>
      </ButtonWrapper>
    </Container>
  )
}

export default Avatar
