// styles
import { Card, ImageContainer, InfoTitle, SubInfoContainer, SubInfoText } from './MediaCard.style'

// assets
import { ReactComponent as MovieIcon } from '../../../assets/icons/icon_nav_movies.svg'
import { ReactComponent as TvIcon } from '../../../assets/icons/icon_nav_tv.svg'

// constants
import { TmdbImageEndpoint } from '../../../constants/endpointPaths.constant'
import {
  MEDIA_TYPE,
  MEDIA_TYPE_TITLE,
  MediaTypeTitle,
} from '../../../constants/mediaTypes.constants'

// components
import Skeleton from 'react-loading-skeleton'

interface Props {
  img?: string
  date?: string
  mediaType: MediaTypeTitle
  title: string
}

const MediaCard = ({ img, date, mediaType, title }: Props) => {
  return (
    <Card>
      <ImageContainer>
        {img ? (
          <>
            <img src={`${TmdbImageEndpoint}${img}`} />
          </>
        ) : (
          <Skeleton />
        )}
      </ImageContainer>
      <SubInfoContainer>
        <SubInfoText>{date?.split('-')[0] || 'N/A'}</SubInfoText>
        <SubInfoText>·</SubInfoText>
        {mediaType === MEDIA_TYPE.MOVIE ? <MovieIcon /> : <TvIcon />}
        <SubInfoText>{MEDIA_TYPE_TITLE[mediaType]}</SubInfoText>
      </SubInfoContainer>
      <InfoTitle>{title}</InfoTitle>
    </Card>
  )
}

export default MediaCard
