import React, { useRef, useState } from 'react'

// lib
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

// styles
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SlideContainer,
  SlideController,
  SlidePagination,
  SlidePaginationItem,
} from './VideosSwiper.style'

interface Props<T> {
  list: T[]
  renderer: (target: T, index: number) => React.ReactNode
}

const VideosSwiper = <T,>({ list, renderer }: Props<T>) => {
  const swiperRef = useRef<SwiperType>()
  const [currentIndex, setCurrentIndex] = useState(0)

  const paginationLength = Math.ceil(list.length / 3)
  const shouldDisplayPrevController = currentIndex > 0
  const shouldDisplayNextController = currentIndex < paginationLength - 1

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  const handleClickSlideChange = (direction: 'PREV' | 'NEXT') => () => {
    switch (direction) {
      case 'PREV':
        swiperRef.current?.slidePrev()
        break

      case 'NEXT':
        swiperRef.current?.slideNext()
        break
    }
  }

  const handleSlideChange = (swiper: SwiperType) => {
    if (swiper.isBeginning) {
      setCurrentIndex(0)
    } else if (swiper.isEnd) {
      setCurrentIndex(paginationLength - 1)
    } else {
      setCurrentIndex(Math.floor(swiper.realIndex / 3))
    }
  }

  return (
    <SlideContainer>
      {paginationLength > 1 && (
        <SlidePagination>
          {Array.from({ length: paginationLength }).map((_, index) => {
            return <SlidePaginationItem key={index} isActive={index === currentIndex} />
          })}
        </SlidePagination>
      )}
      {shouldDisplayPrevController && (
        <SlideController isLeft onClick={handleClickSlideChange('PREV')}>
          <ArrowLeftIcon />
        </SlideController>
      )}
      <Swiper
        centeredSlides
        centeredSlidesBounds
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={16}
        allowTouchMove={false}
        style={{
          width: '100%',
        }}
        onBeforeInit={handleInitSwiper}
        onSlideChange={handleSlideChange}
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{ width: '100%' }}>
              {({ isActive, isNext, isPrev }) => {
                const opacity = isActive || isNext || isPrev ? 1 : 0.3
                return (
                  <div
                    style={{
                      opacity,
                      paddingTop: '56.25%',
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    {renderer(item, index)}
                  </div>
                )
              }}
            </SwiperSlide>
          )
        })}
      </Swiper>
      {shouldDisplayNextController && (
        <SlideController isLeft={false} onClick={handleClickSlideChange('NEXT')}>
          <ArrowRightIcon />
        </SlideController>
      )}
    </SlideContainer>
  )
}

export default VideosSwiper
