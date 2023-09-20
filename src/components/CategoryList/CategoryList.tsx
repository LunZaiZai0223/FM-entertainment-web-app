import { useNavigate, useLocation, createSearchParams } from 'react-router-dom'

// constants
import { RouterPathMap } from '../../constants/routerPathMap.constant'

// components
import CategoryItem from './CategoryItem'

// interfaces
import { Genre } from '../../interfaces/genre.model'

// styles
import { Container, Wrapper } from './CategoryList.style'

interface Props {
  mainColor?: string
  genreList: Genre[]
}

const CategoryList = ({ mainColor, genreList }: Props) => {
  const { pathname } = useLocation()
  const isMovie = pathname.includes('movies')
  const navigate = useNavigate()
  const handleClickGenreItem = (genreId: number, genreName: string) => {
    navigate({
      pathname: isMovie ? RouterPathMap.GENRE_MOVIES() : RouterPathMap.GENRE_TVS(),
      search: createSearchParams({
        genre: genreId.toString(),
        genreName,
      }).toString(),
    })
  }

  return (
    <Container>
      <Wrapper>
        {genreList.map(({ name, id }, index) => {
          return (
            <CategoryItem
              label={name}
              key={id}
              value={id}
              index={index}
              mainColor={mainColor}
              onClickHandler={handleClickGenreItem}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default CategoryList
