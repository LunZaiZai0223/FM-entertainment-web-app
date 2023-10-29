// libs
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts'

// interfaces
import { MediaInfo } from '../../../../interfaces/mediaInfo.model'

// constants
import { CHART_COLORS_MAP } from '../../../../constants/chartColorsMap.constants'

// styles
import { ChartContainer, TooltipContainer } from './Chart.style'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

interface Props {
  dataList: {
    mainGenre: { id: number; name: string }
    value: MediaInfo[]
    qty: number
  }[]
}

const renderCustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    const titles = data.payload.value.map((item: MediaInfo) => item.title) as string[]
    return (
      <TooltipContainer>
        {titles.map((title, index: number) => (
          <p key={title}>
            {index + 1}. {title}
          </p>
        ))}
      </TooltipContainer>
    )
  }
  return null
}

const Chart = ({ dataList }: Props) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <PieChart style={{ outline: 'none' }}>
          <Pie
            label={({ mainGenre }) => `${mainGenre.name}`}
            data={dataList}
            tooltipType={'none'}
            cx={'50%'}
            cy={'50%'}
            innerRadius={25}
            outerRadius={100}
            dataKey='qty'
          >
            {dataList.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS_MAP[entry.mainGenre.id]}
                  style={{ outline: 'none' }}
                />
              )
            })}
          </Pie>
          <Tooltip content={renderCustomTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
