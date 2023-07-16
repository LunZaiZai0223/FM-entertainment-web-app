// components
import CategoryItem from './CategoryItem'

// styles
import { Container, Wrapper } from './CategoryList.style'

// test constants
const TEST_CATEGORY_LIST = [
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
  {
    label: 'Action',
    destination: '123',
  },
]

interface Props {
  mainColor?: string
}

const CategoryList = ({ mainColor }: Props) => {
  return (
    <Container>
      <Wrapper>
        {TEST_CATEGORY_LIST.map((item, index) => {
          return (
            <CategoryItem
              label={item.label}
              destination={item.destination}
              key={index}
              index={index}
              mainColor={mainColor}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default CategoryList
