import React from 'react'

// components
import VideosSwiper from '../../../components/VideosSwiper'

// styles
import { Title } from './RelatedVideos.style'

interface Props<T> {
  list: T[]
  renderer: (item: T, index: number) => React.ReactNode
}

const RelatedVideos = <T,>({ list, renderer }: Props<T>) => {
  return (
    <div>
      <Title>Videos</Title>
      <VideosSwiper list={list} renderer={renderer} />
    </div>
  )
}

export default RelatedVideos
