import { useRef, useState, useEffect } from 'react'

interface Props {
  rootMargin?: string
  threshold?: number
  root?: null | Element
}

const useOnScreen = ({ rootMargin = '0px', threshold = 0, root = null }: Props = {}) => {
  const observerRef = useRef<IntersectionObserver>()
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [node, setNode] = useState<any>(null)

  useEffect(() => {
    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entries]) => {
          setIsIntersecting(entries.isIntersecting)
        },
        { root, rootMargin, threshold },
      )

      observerRef.current.observe(node)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [node, rootMargin, threshold])

  return {
    isIntersecting,
    setNode,
  }
}

export default useOnScreen
