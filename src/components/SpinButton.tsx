import React, { useState } from 'react'
import SpinButtonClick from '../../scripts/SpinButtonClick'

interface Props {
  border: string
  color: string
  children?: React.ReactNode
  height: string
  radius: string
  width: string
}

const SpinButton: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  radius,
  width,
}) => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <button
      onClick={() => {
        setCount(count + 1)
        SpinButtonClick()
      }}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  )
}

export default SpinButton
