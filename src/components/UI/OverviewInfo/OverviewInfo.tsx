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
  type: string
  releaseYear: string
  title: string
}

const OverviewInfo = ({
  containerShouldUseAbsolute = false,
  isMain = false,
  type,
  releaseYear,
  title,
}: Props) => {
  return (
    <Container shouldUseAbsolute={containerShouldUseAbsolute}>
      <SubInfoContainer>
        <SubInfoText>{releaseYear.split('-')[0]}</SubInfoText>
        <SubInfoText>·</SubInfoText>
        <SubInfoMovieIcon defaultcolor={theme.colors.white} />
        <SubInfoText>{type === 'Movie' ? 'Movie' : 'TV Series'}</SubInfoText>
      </SubInfoContainer>
      <InfoTitle isMain={isMain}>{title}</InfoTitle>
    </Container>
  )
}

export default OverviewInfo
