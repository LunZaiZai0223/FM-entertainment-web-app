// components
import GenreOrCastItem from './GenreOrCastItem'

// interfaces
import { Genre } from '../../../interfaces/genre.model'
import { Cast } from '../../../interfaces/cast.model'

// styles
import { List } from './GenresOrCastList.style'

interface Props {
  dataList: Genre[] | Cast[]
}

const GenreOrCastList = ({ dataList }: Props) => {
  return (
    <List>
      {dataList.map((item) => {
        return <GenreOrCastItem key={item.id} item={item} />
      })}
    </List>
  )
}

export default GenreOrCastList
