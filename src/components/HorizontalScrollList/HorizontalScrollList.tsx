import { useNavigate } from 'react-router-dom'

// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// constants
import { TmdbImageEndpoint } from '../../constants/endpointPaths.constant'
import { RouterPathMap } from '../../constants/routerPathMap.constant'

// styles
import { Container, ItemWrapper, Item } from './HorizontalScrollList.style'

export interface HorizontalItem {
  title: string
  releaseYear: string
  imgSrc: string
  type: 'MOVIE' | 'TV'
  id: number
}

interface Props {
  list: HorizontalItem[]
  sectionTitle: string
  sectionCaption: string
}

const HorizontalScrollList = ({ list, sectionTitle, sectionCaption }: Props) => {
  const navigate = useNavigate()

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
    <SectionBlock marginLevel='Large'>
      <SectionHeader
        title={sectionTitle}
        caption={sectionCaption}
        isSecondary={sectionCaption === 'tv series'}
        goToMorePath={
          sectionCaption === 'tv series'
            ? RouterPathMap.TRENDING_TVS()
            : RouterPathMap.TRENDING_MOVIES()
        }
      />
      <Container>
        {list.map(({ title, releaseYear, imgSrc, type, id }) => {
          return (
            <ItemWrapper key={id} onClick={handleClickItem(id, type)}>
              <Item>
                <StyledImage src={`${TmdbImageEndpoint}${imgSrc}`} />
                <OverviewInfo
                  containerShouldUseAbsolute
                  isMain
                  type={type}
                  title={title}
                  releaseYear={releaseYear}
                />
              </Item>
            </ItemWrapper>
          )
        })}
      </Container>
    </SectionBlock>
  )
}

export default HorizontalScrollList
