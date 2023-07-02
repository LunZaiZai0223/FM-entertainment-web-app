import React from 'react'

// styles
import { Button } from './StyledButton.style'

type ButtonType = 'button' | 'submit' | 'reset'
export type StyleType = 'primary' | 'secondary'

interface Props {
  onClick?: () => void
  children: React.ReactNode
  styleType?: StyleType
  type?: ButtonType
}

const StyledButton = ({ children, onClick, type = 'button', styleType = 'primary' }: Props) => {
  return (
    <Button type={type} onClick={onClick} styleType={styleType}>
      {children}
    </Button>
  )
}

export default StyledButton
