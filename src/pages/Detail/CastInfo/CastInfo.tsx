// components
import GenreOrCastList from '../GenresOrCastList'

// interfaces
import { Cast } from '../../../interfaces/cast.model'

// styles
import { Container, Title } from './CastInfo.style'

interface Props {
  dataList: Cast[]
}

const CastInfo = ({ dataList }: Props) => {
  return (
    <Container>
      <Title>Casts</Title>
      <GenreOrCastList dataList={dataList} />
    </Container>
  )
}

export default CastInfo
