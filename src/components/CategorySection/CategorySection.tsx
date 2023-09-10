import { useNavigate } from 'react-router-dom'

// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths.constant'
import { RouterPathMap } from '../../constants/routerPathMap.constant'

// interfaces
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

// styles
import { Container, Item, ImageWrapper } from './CategorySection.style'

type InputCaption = 'MOVIE' | 'TV'

interface Props {
  title: string
  caption: InputCaption
  dataList: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]
}

const formatCaption = (inputCaption: InputCaption) => {
  switch (inputCaption) {
    case 'MOVIE':
      return {
        header: 'MOVIE',
        overviewType: 'Movie',
      }

    case 'TV':
      return {
        header: 'TV SERIES',
        overviewType: 'TV Series',
      }

    default:
      return {
        header: 'MOVIE',
        overviewType: 'Movie',
      }
  }
}

const CategorySection = ({ title, caption, dataList }: Props) => {
  const navigate = useNavigate()
  const currentCaptionGroup = formatCaption(caption)
  const handleClickItem = (id: number, type: string) => () => {
    switch (type) {
      case 'MOVIE':
        navigate(RouterPathMap.MOVIE_DETAIL(id.toString()))
        break

      case 'TV':
        navigate(RouterPathMap.TV_SERIES_DETAIL(id.toString()))
        break

      default:
        navigate(RouterPathMap.MOVIE_DETAIL(id.toString()))
    }
  }

  return (
    <SectionBlock>
      <SectionHeader
        title={title}
        caption={currentCaptionGroup.header}
        isSecondary={caption === 'TV'}
      />
      <Container>
        {dataList.map((item, index, self) => {
          const isTv = 'first_air_date' in item
          return (
            <Item
              key={item.id}
              shouldBeLarge={index >= self.length - 2}
              onClick={handleClickItem(item.id, isTv ? 'TV' : 'MOVIE')}
            >
              <ImageWrapper>
                <StyledImage
                  src={`${TmdbImageEndpoint}${item.backdrop_path || (item.poster_path as string)}`}
                />
              </ImageWrapper>
              <OverviewInfo
                type={currentCaptionGroup.overviewType}
                title={'title' in item ? item.title : item.name}
                releaseYear={isTv ? item.first_air_date : item.release_date}
              />
            </Item>
          )
        })}
      </Container>
    </SectionBlock>
  )
}

export default CategorySection
