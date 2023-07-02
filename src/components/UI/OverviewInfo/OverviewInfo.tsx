// theme
import theme from '../../../styles/theme'

// styles
import {
  Container,
  InfoTitle,
  SubInfoContainer,
  SubInfoText,
  SubInfoMovieIcon,
} from './OverviewInfo.style'

interface Props {
  containerShouldUseAbsolute?: boolean
  isMain?: boolean
}

const OverviewInfo = ({ containerShouldUseAbsolute = false, isMain = false }: Props) => {
  return (
    <Container shouldUseAbsolute={containerShouldUseAbsolute}>
      <SubInfoContainer>
        <SubInfoText>2023</SubInfoText>
        <SubInfoMovieIcon defaultcolor={theme.colors.white} />
        <SubInfoText>Movie</SubInfoText>
      </SubInfoContainer>
      <InfoTitle isMain={isMain}>Knights of the Zodiac</InfoTitle>
    </Container>
  )
}

export default OverviewInfo
