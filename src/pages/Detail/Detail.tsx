import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// libs
import { useQuery } from 'react-query'

// apis
import {
  getMovieDetailRequest,
  getMovieCastsRequest,
  getMovieVideosRequest,
  getTvSeriesDetailRequest,
  getTvSeriesCastsRequest,
  getTvSeriesVideosRequest,
} from '../../requests/tmdb'

// interface
import { Trailer } from '../../interfaces/trailer.model'

// constants
import { TmdbImageEndpoint, ImdbBaseUrl } from '../../constants/endpointPaths.constant'
import { LanguageMap } from '../../constants/language.constant'

// components
import DetailRating from './DetailRating'
import SubInfoContainer from './SubInfoContainer'
import SubInfo from './SubInfo'
import Genres from './Genres'
import CastInfo from './CastInfo'
import Synopsis from './Synopsis'
import RelatedVideos from './RelatedVideos'
import RelatedLink from './RelatedLink'
import VideoModal from './VideoModal'
import VideoCard from '../../components/VideosSwiper/VideoCard'
import StyledImage from '../../components/UI/StyledImage'
import SkeletonContent from '../../components/UI/SkeletonContent'
import SkeletonImage from '../../components/UI/SkeletonImage'

// assets
import { ReactComponent as ImdbIcon } from '../../assets/icons/icon_imdb.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/icon_link.svg'

// styles
import {
  Container,
  MovieImageContainer,
  MovieContextContainer,
  ImageWrapper,
  Title,
  Tagline,
} from './Detail.style'

interface Props {
  type: 'MOVIE' | 'TV'
}

const formatMinsWithHours = (mins: number) => {
  if (mins < 60) return `${mins} m`
  const hours = Math.floor(mins / 60)
  const restMins = mins - hours * 60
  return `${hours} h ${restMins} m`
}

const formatDate = (date: string, config?: { shouldDisplayDate: boolean }) => {
  const { shouldDisplayDate } = config || {}

  if (shouldDisplayDate) {
    return date.replaceAll('-', '/')
  }

  return date.split('-').slice(0, 2).join('/')
}

const formatRelatedLinks = (source: {
  homepage?: string
  imdb_id?: string
}): { targetUrl: string; icon: React.ReactNode; label: string }[] => {
  const sourceEntries = Object.entries(source)
  const checkIsImdb = (key: string) => key === 'imdb_id'
  const formattedImdbUrl = (url: string) => `${ImdbBaseUrl}${url}`
  return sourceEntries.map(([key, url]) => {
    const isImdb = checkIsImdb(key)
    return {
      targetUrl: isImdb ? formattedImdbUrl(url) : url,
      icon: isImdb ? <ImdbIcon /> : <LinkIcon />,
      label: isImdb ? 'IMDB' : 'Website',
    }
  })
}

const Detail = ({ type }: Props) => {
  const [videoModalIsActivated, setVideoModalIsActivated] = useState(false)
  const [currentSelectedVideoIndex, setCurrentSelectedVideoIndex] = useState(-1)
  const [scrollPositionY, setScrollPositionY] = useState(0)
  const { id = '' } = useParams()
  const isTv = type === 'TV'

  const { isLoading: isFetchingDetail, data: detailData } = useQuery(['detail', id], () => {
    if (isTv) {
      return getTvSeriesDetailRequest(id)
    }
    return getMovieDetailRequest(id)
  })

  const { isLoading: isFetchingCasts, data: castsData } = useQuery(['casts', id], () => {
    if (isTv) {
      return getTvSeriesCastsRequest(id)
    }
    return getMovieCastsRequest(id)
  })
  const { isLoading: isFetchingVideos, data: videosData } = useQuery(['videos', id], () => {
    if (isTv) {
      return getTvSeriesVideosRequest(id)
    }
    return getMovieVideosRequest(id)
  })

  const videos = videosData?.results.filter((item) => item.site === 'YouTube') ?? []

  const handleVideoClick = (
    targetYoutube: Trailer,
    targetIndex: number,
    scrollPositionY?: number,
  ) => {
    setCurrentSelectedVideoIndex(targetIndex)
    setVideoModalIsActivated(true)
    if (scrollPositionY) {
      setScrollPositionY(scrollPositionY)
    }
  }

  const handleClickToggleModal = () => {
    setVideoModalIsActivated((prev) => !prev)
    window.scrollTo({ top: scrollPositionY })
  }

  const isPageLoading = isFetchingCasts || isFetchingVideos || isFetchingDetail || !detailData

  return (
    <Container>
      <MovieImageContainer>
        {isPageLoading && <SkeletonImage />}
        {!isPageLoading && (
          <ImageWrapper>
            {!isPageLoading && (
              <StyledImage
                src={`${TmdbImageEndpoint}${detailData?.poster_path || detailData?.backdrop_path}`}
              />
            )}
          </ImageWrapper>
        )}
      </MovieImageContainer>
      <MovieContextContainer>
        {isPageLoading && <SkeletonContent />}
        {!isPageLoading && (
          <>
            <Title>{isTv ? detailData?.name : detailData?.title}</Title>
            <Tagline>{detailData?.tagline}</Tagline>
            <DetailRating rating={detailData?.vote_average || 0} />
            <SubInfoContainer>
              {!isTv && (
                <SubInfo title={'Length'} content={formatMinsWithHours(detailData?.runtime || 0)} />
              )}
              <SubInfo
                title={'Language'}
                content={LanguageMap[detailData.original_language] || LanguageMap.en}
              />
              {isTv && (
                <>
                  <SubInfo
                    title={'First Air'}
                    content={formatDate(detailData?.first_air_date ?? '', {
                      shouldDisplayDate: true,
                    })}
                  />
                  <SubInfo
                    title={'Last Air'}
                    content={formatDate(detailData?.last_air_date ?? '', {
                      shouldDisplayDate: true,
                    })}
                  />
                </>
              )}
              {!isTv && (
                <SubInfo title={'Year'} content={formatDate(detailData?.release_date || '')} />
              )}
              {isTv && <SubInfo title={'Status'} content={detailData.status} />}
            </SubInfoContainer>
            <Genres dataList={detailData?.genres || []} />
            <Synopsis content={detailData?.overview || ''} />
            <CastInfo dataList={castsData?.cast || []} />
            <RelatedLink
              linkList={formatRelatedLinks({
                ...(detailData?.homepage && { homepage: detailData.homepage }),
                ...(detailData?.imdb_id && { ['imdb_id']: detailData?.imdb_id }),
              })}
            />
          </>
        )}
        {!isPageLoading && videos.length > 0 && (
          <RelatedVideos<Trailer>
            list={videos}
            renderer={(item, index) => (
              <VideoCard item={item} index={index} onCardClick={handleVideoClick} />
            )}
          />
        )}
      </MovieContextContainer>
      {videoModalIsActivated && (
        <VideoModal
          onToggleModal={handleClickToggleModal}
          videos={videos}
          onClickVideoItem={handleVideoClick}
          currentSelectedVideoIndex={currentSelectedVideoIndex}
        />
      )}
    </Container>
  )
}

export default Detail
