import { useState, useMemo, ChangeEvent, FormEvent } from 'react'

// components
import StyledButton from '../../../../components/UI/StyledButton'

// hooks
import useClickOutside from '../../../../hooks/useClickOutside'

// styles
import {
  Container,
  FormControl,
  LabelContent,
  LabelWrapper,
  InputWrapper,
  ButtonWrapper,
} from './UserInfo.style'

const UserInfo = () => {
  const [enteredNickname, setEnteredNickname] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setEnteredNickname(value)
  }

  const handleClickFormControl = () => {
    setIsActive(true)
  }

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()
  }

  const useClickOutsideCallback = useMemo(() => {
    return {
      callback: () => setIsActive(false),
    }
  }, [])

  const ref = useClickOutside<HTMLDivElement>(useClickOutsideCallback)

  // NOTE: 也許之後可以把 input 拆成獨立的元件
  return (
    <Container>
      <form onSubmit={handleSubmitForm}>
        <FormControl onClick={handleClickFormControl} ref={ref} isActive={isActive}>
          <LabelWrapper isActive={Boolean(enteredNickname) || isActive}>
            <LabelContent htmlFor='nickname'>NickName</LabelContent>
          </LabelWrapper>
          <InputWrapper>
            <input
              id='nickname'
              name='nickname'
              type='text'
              value={enteredNickname}
              onChange={handleChangeNickname}
            />
          </InputWrapper>
        </FormControl>

        <ButtonWrapper>
          <StyledButton type={'submit'} styleType={'primary'} onClick={() => console.log('save')}>
            Save
          </StyledButton>
        </ButtonWrapper>
      </form>
    </Container>
  )
}

export default UserInfo
