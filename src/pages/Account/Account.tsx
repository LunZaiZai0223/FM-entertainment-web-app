import { useNavigate } from 'react-router-dom'

// hooks
import useToastContext from '../../components/UI/Toast/useToastContext'

// assets
import { ReactComponent as GoogleIcon } from '../../assets/icons/icon_google.svg'

// styles
import { FormContainer, FormWrapper, FormTitle, ThirdOauthList } from './Account.style'
import { ToastContent } from '../../components/UI/Toast/Toast.style'

import { signInWithGoogle } from '../../utils/firebase'

const Account = () => {
  const navigate = useNavigate()
  const { addToast } = useToastContext()

  const handleClick = () => {
    signInWithGoogle({
      onSuccess: (result) => {
        navigate({ pathname: '/my' })
        addToast(<ToastContent>Signed in successfully!</ToastContent>)
        console.log(result, 'result')
      },
    })
  }

  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>Sign In</FormTitle>
        <ThirdOauthList>
          <li>
            <button onClick={handleClick}>
              <GoogleIcon />
            </button>
          </li>
        </ThirdOauthList>
      </FormWrapper>
    </FormContainer>
  )
}

export default Account
