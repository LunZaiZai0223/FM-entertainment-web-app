// components
import GenreOrCastList from '../GenresOrCastList'

// interfaces
import { Genre } from '../../../interfaces/genre.model'

// styles
import { Container, Title } from './Genres.style'

interface Props {
  dataList: Genre[]
}

const Genres = ({ dataList }: Props) => {
  return (
    <Container>
      <Title>Genres</Title>
      <GenreOrCastList dataList={dataList} />
    </Container>
  )
}

export default Genres
