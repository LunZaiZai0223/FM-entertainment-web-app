import { useNavigate } from 'react-router-dom'

// styles
import { Container, Wrapper } from './CategoryItem.style'

interface Props {
  label: string
  destination: string
  index: number
  mainColor?: string
}

const CategoryItem = ({ label, destination, index, mainColor }: Props) => {
  const navigate = useNavigate()

  const handleNavigateCategory = () => {
    navigate(destination)
  }

  return (
    <Container isMain={index % 2 === 0} mainColor={mainColor} onClick={handleNavigateCategory}>
      <Wrapper>{label}</Wrapper>
    </Container>
  )
}

export default CategoryItem
