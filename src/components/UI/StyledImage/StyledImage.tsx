// styles
import { Img } from './StyledImage.style'

interface Props {
  src?: string
}

const StyledImage = ({ src = '' }: Props) => {
  return <Img src={src} loading='lazy' decoding='async' />
}

export default StyledImage
