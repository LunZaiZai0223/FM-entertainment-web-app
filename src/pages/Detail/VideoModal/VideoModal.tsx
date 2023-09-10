import { useState, useEffect } from 'react'

// components
import Modal from '../../../components/UI/Modal'
import StyledImage from '../../../components/UI/StyledImage'
import YoutubePlayer from '../../../components/YoutubePlayer'

// constants
import { YoutubeThumbnailUrl } from '../../../constants/endpointPaths.constant'

// interfaces
import { Trailer } from '../../../interfaces/trailer.model'

// assets
import { ReactComponent as CloseIcon } from '../../../assets/icons/icon_close.svg'
import { ReactComponent as PlayIcon } from '../../../assets/icons/icon_play.svg'
import { ReactComponent as CollapseIcon } from '../../../assets/icons/icon_collapse.svg'

// styles
import {
  Container,
  PlayerContainer,
  CloseBtn,
  Content,
  List,
  Item,
  Counter,
  Preview,
  Info,
  SubInfo,
  ContentHeader,
  CollapseBtnWrapper,
  CollapseBtn,
} from './VideoModal.style'

// local helpers
const transformDate = (isoDateString: string) => {
  return isoDateString.split('T')[0].replaceAll('-', '/')
}

interface Props {
  videos: Trailer[]
  currentSelectedVideoIndex: number
  onToggleModal: () => void
  onClickVideoItem: (targetVideoItem: Trailer, index: number) => void
}

const VideoModal = ({
  onToggleModal,
  videos,
  onClickVideoItem,
  currentSelectedVideoIndex,
}: Props) => {
  const [collapseIsExpanded, setCollapseIsExpanded] = useState(currentSelectedVideoIndex > 10)
  const shouldDisplayCollapseBtn = videos.length > 10
  const displayedVideos = collapseIsExpanded ? videos : videos.slice(0, 10)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <Modal onCloseModal={onToggleModal}>
      <Container
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.15,
          },
        }}
      >
        <PlayerContainer>
          <CloseBtn onClick={onToggleModal}>
            <CloseIcon />
          </CloseBtn>
          <YoutubePlayer
            youtubeVideoKey={videos[currentSelectedVideoIndex].key}
            key={videos[currentSelectedVideoIndex].key}
          />
        </PlayerContainer>
        <Content>
          <ContentHeader>Videos</ContentHeader>
          <List>
            {displayedVideos.map((videoItem, index) => {
              const { type, name, published_at: publishedAt, key } = videoItem
              return (
                <Item
                  key={index}
                  onClick={() => {
                    onClickVideoItem(videoItem, index)
                  }}
                  isCurrent={index === currentSelectedVideoIndex}
                >
                  <Counter>{index + 1}</Counter>
                  <Preview>
                    <StyledImage src={YoutubeThumbnailUrl(key)} />
                    <PlayIcon />
                  </Preview>
                  <Info>
                    <p>{name}</p>
                    <SubInfo>
                      <span>Date:</span>
                      <span>{transformDate(publishedAt)}</span>
                    </SubInfo>
                    <SubInfo hasBorder>
                      <span>Type:</span>
                      <span>{type}</span>
                    </SubInfo>
                  </Info>
                </Item>
              )
            })}
          </List>
          {shouldDisplayCollapseBtn && (
            <CollapseBtnWrapper>
              <CollapseBtn
                onClick={() => setCollapseIsExpanded((prev) => !prev)}
                isExpanded={collapseIsExpanded}
              >
                <CollapseIcon />
              </CollapseBtn>
            </CollapseBtnWrapper>
          )}
        </Content>
      </Container>
    </Modal>
  )
}

export default VideoModal
