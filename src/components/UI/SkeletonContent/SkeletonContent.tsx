// components
import Skeleton from 'react-loading-skeleton'

// styles
import { Title, Block, BlockText, BlockTitle } from './SkeletonContent.style'

const SkeletonContent = () => {
  return (
    <>
      <Title>
        <Skeleton />
      </Title>
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <Block key={`block-${index}`}>
            <BlockTitle>
              <Skeleton style={{ marginBottom: '10px' }} />
            </BlockTitle>
            <BlockText>
              <Skeleton count={3} style={{ marginBottom: '6px' }} />
            </BlockText>
          </Block>
        )
      })}
    </>
  )
}

export default SkeletonContent
