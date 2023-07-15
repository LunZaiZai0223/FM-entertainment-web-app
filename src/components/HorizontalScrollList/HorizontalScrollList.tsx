// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// styles
import { Container, ItemWrapper, Item } from './HorizontalScrollList.style'

const list = Array.from({ length: 12 }).map((_, index) => index)

const HorizontalScrollList = () => {
  return (
    <SectionBlock marginLevel='Large'>
      <SectionHeader title='Trending' caption='movie' />
      <Container>
        {list.map((num) => {
          return (
            <ItemWrapper key={num}>
              <Item>
                <StyledImage />
                <OverviewInfo containerShouldUseAbsolute isMain />
              </Item>
            </ItemWrapper>
          )
        })}
      </Container>
    </SectionBlock>
  )
}

export default HorizontalScrollList
