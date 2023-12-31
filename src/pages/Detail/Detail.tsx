/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// libs
import { useQuery } from 'react-query'

// hooks
import useToastContext from '../../components/UI/Toast/useToastContext'

// utils
import LocalStorageHelper from '../../utils/localStorageHelper'

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
import { MediaInfo } from '../../interfaces/mediaInfo.model'

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
import ActionList from './ActionList'
import VideoCard from '../../components/VideosSwiper/VideoCard'
import StyledImage from '../../components/UI/StyledImage'
import SkeletonContent from '../../components/UI/SkeletonContent'
import SkeletonImage from '../../components/UI/SkeletonImage'
import Error from '../../components/UI/Error'

// assets
import { ReactComponent as ImdbIcon } from '../../assets/icons/icon_imdb.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/icon_link.svg'
import { ReactComponent as ShareIcon } from '../../assets/icons/icon_share.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/icon_favoriate.svg'
import { ReactComponent as FavoriteFullIcon } from '../../assets/icons/icon_favoriate_full.svg'

// styles
import {
  Container,
  MovieImageContainer,
  MovieContextContainer,
  ImageWrapper,
  Title,
  Tagline,
  TitleContainer,
  ToastContent,
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
  const { addToast } = useToastContext()
  const [videoModalIsActivated, setVideoModalIsActivated] = useState(false)
  const [currentSelectedVideoIndex, setCurrentSelectedVideoIndex] = useState(-1)
  const [scrollPositionY, setScrollPositionY] = useState(0)
  const { id = '' } = useParams()
  const isTv = type === 'TV'

  const {
    isLoading: isFetchingDetail,
    data: detailData,
    error: detailError,
  } = useQuery(['detail', id], () => {
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

  const youtubeVideos = videosData?.results.filter((item) => item.site === 'YouTube') ?? []
  const currentLocalStorageKey = isTv ? 'MY_FAVORITE_TV_SERIES' : 'MY_FAVORITE_MOVIES'
  const currentFavorites: MediaInfo[] | null =
    LocalStorageHelper.getLocalStorageItemByKey(currentLocalStorageKey)
  const isDetailInMyFavorite = (() => {
    return currentFavorites ? currentFavorites.some((item) => item.id === detailData?.id) : false
  })()

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

  const formatNewFavoriteItem = () => {
    const { id, backdrop_path, poster_path, first_air_date, release_date, name, title, genres } =
      detailData ?? {}

    return {
      id,
      genres,
      img: backdrop_path || poster_path,
      date: first_air_date || release_date,
      mediaType: isTv ? 'TV_SERIES' : 'MOVIE',
      title: name || title,
    }
  }

  const getRemovedCurrentFavoriteItemList = () => {
    const { id } = detailData ?? {}

    if (currentFavorites) {
      return currentFavorites.filter((favorite) => favorite.id !== id)
    }
    return []
  }

  const actionListData = [
    {
      item: <ShareIcon />,
      handler: () => {
        navigator.clipboard.writeText(window.location.href)
        addToast(<ToastContent>Copy Successfully!</ToastContent>)
      },
    },
    {
      item: isDetailInMyFavorite ? <FavoriteFullIcon /> : <FavoriteIcon />,
      handler: () => {
        const updatedFavoriteList = isDetailInMyFavorite
          ? getRemovedCurrentFavoriteItemList()
          : [...(currentFavorites ?? []), formatNewFavoriteItem()]

        LocalStorageHelper.setLocalStorageItemByKey(currentLocalStorageKey, updatedFavoriteList)
        addToast(
          <ToastContent>
            {isDetailInMyFavorite ? 'Remove' : 'Add'} Favorites Successfully!
          </ToastContent>,
        )
      },
    },
  ]
  const isPageLoading = isFetchingCasts || isFetchingVideos || isFetchingDetail || !detailData

  if (detailError) {
    return <Error />
  }

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
            <TitleContainer>
              <Title>{isTv ? detailData?.name : detailData?.title}</Title>
              <ActionList list={actionListData} />
            </TitleContainer>
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
        {!isPageLoading && youtubeVideos.length > 0 && (
          <RelatedVideos<Trailer>
            list={youtubeVideos}
            renderer={(item, index) => (
              <VideoCard item={item} index={index} onCardClick={handleVideoClick} />
            )}
          />
        )}
      </MovieContextContainer>
      {videoModalIsActivated && (
        <VideoModal
          onToggleModal={handleClickToggleModal}
          videos={youtubeVideos}
          onClickVideoItem={handleVideoClick}
          currentSelectedVideoIndex={currentSelectedVideoIndex}
        />
      )}
    </Container>
  )
}

export default Detail
