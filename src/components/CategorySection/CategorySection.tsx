import { useNavigate } from 'react-router-dom'

// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths.constant'
import { RouterPathMap } from '../../constants/routerPathMap.constant'
import { MEDIA_TYPE } from '../../constants/mediaTypes.constants'

// interfaces
import { MovieItemByCategoryModel } from '../../interfaces/movieItemByCategory.model'
import { TvSeriesItemByCategoryModel } from '../../interfaces/tvSeriesItemByCategory.model'

// styles
import { Container, Item, ImageWrapper } from './CategorySection.style'

interface Props {
  title: string
  caption: string
  dataList: MovieItemByCategoryModel[] | TvSeriesItemByCategoryModel[]
  goToMorePath: string
  shouldCardLarge?: boolean
}

const formatCaption = (inputCaption: string) => {
  switch (inputCaption) {
    case MEDIA_TYPE.MOVIE:
      return {
        header: 'MOVIE',
        overviewType: MEDIA_TYPE.MOVIE,
      }

    case MEDIA_TYPE.TV_SERIES:
      return {
        header: 'TV SERIES',
        overviewType: MEDIA_TYPE.TV_SERIES,
      }

    default:
      return {
        header: '',
        overviewType: '',
      }
  }
}

const CategorySection = ({ title, caption, dataList, goToMorePath, shouldCardLarge }: Props) => {
  const navigate = useNavigate()
  const currentCaptionGroup = formatCaption(caption)
  const handleClickItem = (id: number, type: string) => () => {
    switch (type) {
      case MEDIA_TYPE.MOVIE:
        navigate({ pathname: `${RouterPathMap.MOVIE_DETAIL(id.toString())}` })
        break

      case MEDIA_TYPE.TV_SERIES:
        navigate({ pathname: `${RouterPathMap.TV_SERIES_DETAIL(id.toString())}` })
        break

      default:
        navigate({ pathname: `${RouterPathMap.MOVIE_DETAIL(id.toString())}` })
    }
  }

  return (
    <SectionBlock>
      <SectionHeader
        title={title}
        caption={currentCaptionGroup.header}
        isSecondary={caption === 'TV'}
        goToMorePath={goToMorePath}
      />
      <Container>
        {dataList.map((item, index, self) => {
          const isTv = 'first_air_date' in item
          return (
            <Item
              key={item.id}
              shouldBeLarge={shouldCardLarge ? index >= self.length - 2 : false}
              onClick={handleClickItem(item.id, isTv ? MEDIA_TYPE.TV_SERIES : MEDIA_TYPE.MOVIE)}
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
