import { useEffect, useState } from 'react'

interface Props {
  time?: number
  limit: number
}

const useCounter = ({ time = 50, limit }: Props) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter >= limit) return

    const step = limit >= time ? Math.ceil(limit / time) : 1
    const timer = setInterval(() => {
      setCounter((prev) => (prev + step >= limit ? limit : prev + step))
    }, time)

    return () => clearInterval(timer)
  }, [counter])

  return {
    counter,
  }
}

export default useCounter
