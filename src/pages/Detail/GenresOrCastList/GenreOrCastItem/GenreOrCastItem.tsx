// interfaces
import { Cast } from '../../../../interfaces/cast.model'
import { Genre } from '../../../../interfaces/detail.model'

// styles
import { ItemCard } from './GenresOrCastItem.style'

interface Props {
  item: Cast | Genre
}

const GenreOrCastItem = ({ item }: Props) => {
  return (
    <ItemCard isSecondary={'original_name' in item}>
      {'original_name' in item ? item.original_name : item.name}
    </ItemCard>
  )
}

export default GenreOrCastItem
