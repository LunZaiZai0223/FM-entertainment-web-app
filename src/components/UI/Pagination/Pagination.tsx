// assets
import { ReactComponent as ArrowPrev } from '../../../assets/icons/icon_arrow_left.svg'
import { ReactComponent as ArrowNext } from '../../../assets/icons/icon_arrow_right.svg'

// styles
import { Container, PaginationAction, CurrentPaginationInfo } from './Pagination.style'

interface Props {
  pageNum: number
  totalPageNum: number
  onNext: () => void
  onPrev: () => void
}

const Pagination = ({ pageNum, totalPageNum, onNext, onPrev }: Props) => {
  return (
    <Container>
      <PaginationAction borderRadiusType={'PREV'} onClick={onPrev}>
        <ArrowPrev />
        Prev
      </PaginationAction>
      <CurrentPaginationInfo>
        <span>
          Page <span>{pageNum}</span> of <span>{totalPageNum}</span>
        </span>
      </CurrentPaginationInfo>
      <PaginationAction borderRadiusType={'NEXT'} onClick={onNext}>
        Next
        <ArrowNext />
      </PaginationAction>
    </Container>
  )
}

export default Pagination
