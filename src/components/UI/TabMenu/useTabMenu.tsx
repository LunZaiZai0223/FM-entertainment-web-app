import { useContext } from 'react'

import { TabMenuContext } from './TabMenuProvider'

const useTabMenu = () => {
  const cxt = useContext(TabMenuContext)

  if (!cxt) {
    throw new Error('useTabMenu must be used within a TabMenuProvider')
  }

  const { itemRefs } = cxt

  const handleAddRef = (refEle: HTMLLIElement) => {
    if (!itemRefs.current.some((item) => item === refEle)) {
      itemRefs.current.push(refEle)
    }
  }

  return {
    ...cxt,
    onAddRef: handleAddRef,
  }
}

export default useTabMenu
