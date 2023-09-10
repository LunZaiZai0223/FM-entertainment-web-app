import ReactPlayer from 'react-player/youtube'

// constant
import { YoutubePrefixUrl } from '../../constants/endpointPaths.constant'

// styles
import { Wrapper } from './YoutubePlayer.style'

interface Props {
  youtubeVideoKey: string
}

const YoutubePlayer = ({ youtubeVideoKey }: Props) => {
  return (
    <Wrapper>
      <ReactPlayer
        url={YoutubePrefixUrl(youtubeVideoKey)}
        width={'100%'}
        height={'100%'}
        controls
        onReady={() => {
          window.scrollTo({ top: 0 })
        }}
      />
    </Wrapper>
  )
}

export default YoutubePlayer
