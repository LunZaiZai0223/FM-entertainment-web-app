import { useEffect, useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

// interfaces
import { MediaInfo } from '../../../interfaces/mediaInfo.model'

// constants
import { MEDIA_TYPE } from '../../../constants/mediaTypes.constants'
import { RouterPathMap } from '../../../constants/routerPathMap.constant'

// components
import Summary from './Summary'
import Chart from './Chart'
import SwitchButtons from '../../../components/UI/SwitchButtons'
import MediaCard from '../../../components/UI/MediaCard'

// utils
import LocalStorageHelper from '../../../utils/localStorageHelper'

// styles
import {
  Container,
  SwitchButtonListWrapper,
  BasicInfoContainer,
  EmptyMessage,
  MediaList,
  MediaContainer,
} from './Favorite.style'

interface FormattedResult {
  result: {
    mainGenre: { id: number; name: string }
    value: MediaInfo[]
    qty: number
  }[]
  indexMap: Record<number, number>
}

const BUTTON_LIST = [
  {
    label: 'TV Series',
    value: 0,
  },
  {
    label: 'Movies',
    value: 1,
  },
]

const formatDataFromLocalStorage = (currentTab: 0 | 1) => {
  const resource: MediaInfo[] | null = LocalStorageHelper.getLocalStorageItemByKey(
    currentTab === 0 ? 'MY_FAVORITE_TV_SERIES' : 'MY_FAVORITE_MOVIES',
  )

  if (!resource) return []

  const result = resource.reduce<FormattedResult>(
    (accumulator, currentValue) => {
      const { genres } = currentValue
      const [mainGenreItem] = genres
      const keyName = mainGenreItem.id

      if (keyName.toString() in accumulator.indexMap) {
        accumulator.result[accumulator.indexMap[keyName]].value.push(currentValue)
        accumulator.result[accumulator.indexMap[keyName]].qty += 1
      } else {
        const dataLength = accumulator.result.length
        accumulator.indexMap[keyName] = dataLength === 0 ? 0 : dataLength
        accumulator.result[accumulator.indexMap[keyName]] = {
          mainGenre: mainGenreItem,
          value: [currentValue],
          qty: 1,
        }
      }

      return accumulator
    },
    { indexMap: {}, result: [] } as FormattedResult,
  )

  return result.result
}

const Favorite = () => {
  const navigate = useNavigate()

  const [tabValue, setTabValue] = useState<0 | 1>(0)
  const [favoriteList, setFavoriteList] = useState<
    {
      mainGenre: { id: number; name: string }
      value: MediaInfo[]
      qty: number
    }[]
  >([])

  const handleClickItem = (target: MediaInfo) => {
    navigate({
      pathname:
        target.mediaType === MEDIA_TYPE.MOVIE
          ? RouterPathMap.MOVIE_DETAIL(target.id.toString())
          : RouterPathMap.TV_SERIES_DETAIL(target.id.toString()),
    })
  }

  let content = <></>

  if (favoriteList.length > 0) {
    content = (
      <Fragment key={tabValue}>
        <BasicInfoContainer>
          <Chart dataList={favoriteList} />
          <Summary dataList={favoriteList} />
        </BasicInfoContainer>
        <MediaContainer>
          <h3>My Favorites:</h3>
          <MediaList>
            {favoriteList.map((ele) => {
              return ele.value.map((item) => (
                <li key={item.id} onClick={() => handleClickItem(item)}>
                  <MediaCard
                    mediaType={item.mediaType}
                    title={item.title}
                    img={item.img}
                    date={item.date}
                  />
                </li>
              ))
            })}
          </MediaList>
        </MediaContainer>
      </Fragment>
    )
  } else {
    content = <EmptyMessage>Your favorite is empty.</EmptyMessage>
  }

  useEffect(() => {
    setFavoriteList(formatDataFromLocalStorage(tabValue))
  }, [tabValue])

  return (
    <Container>
      <SwitchButtonListWrapper>
        <SwitchButtons
          buttonList={BUTTON_LIST}
          currentValue={tabValue}
          onSwitchButton={setTabValue}
        />
      </SwitchButtonListWrapper>
      {content}
    </Container>
  )
}

export default Favorite
