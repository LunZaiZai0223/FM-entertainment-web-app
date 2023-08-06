// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths'

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
  const currentCaptionGroup = formatCaption(caption)
  return (
    <SectionBlock>
      <SectionHeader
        title={title}
        caption={currentCaptionGroup.header}
        isSecondary={caption === 'TV'}
      />
      <Container>
        {dataList.map((item, index, self) => {
          console.log(item)
          return (
            <Item key={item.id} shouldBeLarge={index >= self.length - 2}>
              <ImageWrapper>
                <StyledImage
                  src={`${TmdbImageEndpoint}${item.backdrop_path || (item.poster_path as string)}`}
                />
              </ImageWrapper>
              <OverviewInfo
                type={currentCaptionGroup.overviewType}
                title={'title' in item ? item.title : item.name}
                releaseYear={'release_date' in item ? item['release_date'] : item['first_air_date']}
              />
            </Item>
          )
        })}
      </Container>
    </SectionBlock>
  )
}

export default CategorySection
