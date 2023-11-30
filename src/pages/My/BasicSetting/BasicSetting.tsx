// components
import Avatar from './Avatar'
import UserInfo from './UserInfo'
import SectionWrapper from './SectionWrapper'

// styles
import { Container } from './BasicSetting.style'

const BasicSetting = () => {
  return (
    <Container>
      <SectionWrapper>
        <Avatar />
      </SectionWrapper>
      <UserInfo />
    </Container>
  )
}

export default BasicSetting
