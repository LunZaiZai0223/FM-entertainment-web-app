// styles
import { Img } from './StyledImage.style'

interface Props {
  src?: string
}

const StyledImage = ({ src = '' }: Props) => {
  return <Img src={src} loading='lazy' />
}

export default StyledImage
