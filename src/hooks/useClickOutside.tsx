import { useEffect, useRef } from 'react'

type Props = {
  callback: () => void
}

const useClickOutside = <T extends HTMLElement>({ callback }: Props) => {
  // 這個函式可以接收一個 T 的泛型別，並且實現定義其泛型別有擴展 HTMLElement type
  const ref = useRef<null | T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback])

  // 回傳 ref 供使用的元件綁定 template
  return ref
}

export default useClickOutside
