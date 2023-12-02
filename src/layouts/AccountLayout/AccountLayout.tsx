import { Outlet } from 'react-router-dom'

import background from '../../assets/images/background.jpeg'

// styles
import { BackgroundContainer, BackgroundWrapper, Container } from './AccountLayout.style'

const AccountLayout = () => {
  return (
    <Container>
      <BackgroundContainer>
        <BackgroundWrapper>
          <img src={background} alt='' />
        </BackgroundWrapper>
      </BackgroundContainer>
      <Outlet />
    </Container>
  )
}

export default AccountLayout
