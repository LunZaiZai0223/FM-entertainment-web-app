// libs
import { Rating, ItemStyles } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// styles
import { Container, RatingNum } from './DetailRating.style'
import theme from '../../../styles/theme'

const Star = (
  <polygon points='478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189' />
)

const myStyles: ItemStyles = {
  itemShapes: Star,
  activeFillColor: theme.colors.white,
  inactiveFillColor: 'grey',
  itemStrokeWidth: 50,
}

interface Props {
  rating: number
}

const formatRating = (voteAverage: number) => {
  return voteAverage ? (voteAverage / 2).toFixed(1) : 0
}

const DetailRating = ({ rating }: Props) => {
  const formattedRating = formatRating(rating)
  return (
    <Container>
      <RatingNum>{formattedRating}</RatingNum>
      <Rating
        style={{ maxWidth: 180 }}
        value={formattedRating as number}
        readOnly
        itemStyles={myStyles}
      />
    </Container>
  )
}

export default DetailRating
