import { SwitchButtonList, SwitchButtonItem } from './SwitchButtons.style'

interface Props {
  buttonList: { label: string; value: any }[]
  currentValue: any
  onSwitchButton: (value: any) => void
}

const SwitchButtons = ({ buttonList, onSwitchButton, currentValue }: Props) => {
  return (
    <SwitchButtonList>
      {buttonList.map(({ label, value }) => (
        <SwitchButtonItem
          key={value}
          isActive={currentValue === value}
          onClick={() => onSwitchButton(value)}
        >
          {label}
        </SwitchButtonItem>
      ))}
    </SwitchButtonList>
  )
}

export default SwitchButtons
