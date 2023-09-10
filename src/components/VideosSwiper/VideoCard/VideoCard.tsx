import React from 'react'

// interfaces
import { Trailer } from '../../../interfaces/trailer.model'

// constants
import { YoutubeThumbnailUrl } from '../../../constants/endpointPaths.constant'

// components
import StyledImage from '../../UI/StyledImage'

// styles
import { Card } from './VideoCard.style'

interface Props {
  item: Trailer
  index: number
  onCardClick: (item: Trailer, index: number, scrollPositionY: number) => void
}

const VideoCard = ({ item, index, onCardClick }: Props) => {
  const handleClickCard = (e: React.MouseEvent) => {
    onCardClick(item, index, e.pageY)
  }

  return (
    <Card onClick={handleClickCard}>
      <StyledImage src={YoutubeThumbnailUrl(item.key)} />
    </Card>
  )
}

export default VideoCard
