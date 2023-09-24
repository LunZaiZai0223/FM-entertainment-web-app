import { useState, useEffect } from 'react'

// styles
import { ProgressBar } from './TopProgressBar.style'

const TopProgressBar = () => {
  const [percent, setPercent] = useState(10)

  useEffect(() => {
    const id = setTimeout(() => {
      setPercent((prev) => (prev < 100 ? prev + 10 : 100))
    }, 100)

    return () => {
      clearTimeout(id)
    }
  }, [percent])

  return <ProgressBar percent={percent} />
}

export default TopProgressBar
