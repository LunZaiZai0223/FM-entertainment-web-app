// components
import Skeleton from 'react-loading-skeleton'

// styles
import { Title, Block, BlockText, BlockTitle, Images } from './SkeletonContent.style'

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
      <Block>
        <BlockTitle>
          <Skeleton style={{ marginBottom: '10px' }} />
        </BlockTitle>
        <Images>
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div key={index}>
                <Skeleton style={{ height: '125px', width: '100%' }} />
              </div>
            )
          })}
        </Images>
      </Block>
    </>
  )
}

export default SkeletonContent
