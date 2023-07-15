// components
import SectionBlock from '../UI/SectionBlock'
import SectionHeader from '../UI/SectionHeader'
import OverviewInfo from '../UI/OverviewInfo'
import StyledImage from '../UI/StyledImage'

// styles
import { Container, Item, ImageWrapper } from './CategorySection.style'

const CategorySection = () => {
  return (
    <SectionBlock>
      <SectionHeader title='Trending' caption='movie' />
      <Container>
        <Item>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
        <Item>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
        <Item>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
        <Item>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
        <Item shouldLarge>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
        <Item shouldLarge>
          <ImageWrapper>
            <StyledImage />
          </ImageWrapper>
          <OverviewInfo />
        </Item>
      </Container>
    </SectionBlock>
  )
}

export default CategorySection
