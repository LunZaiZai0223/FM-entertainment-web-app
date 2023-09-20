// styles
import { Container, Wrapper } from './CategoryItem.style'

interface Props {
  label: string
  value: number
  index: number
  mainColor?: string
  onClickHandler: (genreId: number, genreName: string) => void
}

const CategoryItem = ({ label, value, index, mainColor, onClickHandler }: Props) => {
  return (
    <Container
      isMain={index % 2 === 0}
      mainColor={mainColor}
      onClick={() => onClickHandler(value, label)}
    >
      <Wrapper>{label}</Wrapper>
    </Container>
  )
}

export default CategoryItem
