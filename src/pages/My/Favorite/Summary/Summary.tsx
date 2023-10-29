// hooks
import useCounter from '../../../../hooks/useCounter'

// constants
import { CHART_COLORS_MAP } from '../../../../constants/chartColorsMap.constants'

// interfaces
import { MediaInfo } from '../../../../interfaces/mediaInfo.model'

// styles
import { DetailGenreSpot, DetailList, SummaryContainer } from './Summary.style'

interface Props {
  dataList: {
    mainGenre: { id: number; name: string }
    value: MediaInfo[]
    qty: number
  }[]
}

const Summary = ({ dataList }: Props) => {
  const { counter: totalCounter } = useCounter({
    limit: dataList.reduce((accumulator, currentVal) => accumulator + currentVal.qty, 0),
  })

  return (
    <SummaryContainer>
      <h3>Total: {totalCounter}</h3>
      <DetailList>
        {dataList.map((item, index) => {
          return (
            <li key={index}>
              <DetailGenreSpot backgroundColor={CHART_COLORS_MAP[item.mainGenre.id]} />
              <span>
                {item.mainGenre.name}: {item.qty}
              </span>
            </li>
          )
        })}
      </DetailList>
    </SummaryContainer>
  )
}

export default Summary
