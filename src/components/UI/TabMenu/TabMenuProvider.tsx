import React, {
  createContext,
  useState,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
  ReactNode,
  MutableRefObject,
} from 'react'

type AnchorStyle = {
  width: number
  left: number
}

export interface TabMenuProviderProps {
  children: ReactNode
  activatedTab: any
  onChange?: Dispatch<SetStateAction<any>>
}

interface TabMenuContextValue {
  activatedTab: any
  anchorStyle: AnchorStyle
  itemRefs: MutableRefObject<HTMLLIElement[]>
  onSetActivatedTab?: Dispatch<SetStateAction<any>>
  onSetAnchorStyle: Dispatch<SetStateAction<AnchorStyle>>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const TabMenuContext = createContext<TabMenuContextValue | null>(null)

const TabMenuProvider = ({ children, onChange, activatedTab }: TabMenuProviderProps) => {
  const [anchorStyle, setAnchorStyle] = useState({
    width: 0,
    left: 0,
  })
  const itemRefs = useRef<HTMLLIElement[]>([])

  const contextValue = useMemo<TabMenuContextValue>(() => {
    return {
      activatedTab,
      anchorStyle,
      itemRefs,
      onSetAnchorStyle: setAnchorStyle,
      ...(onChange && {
        onSetActivatedTab: onChange,
      }),
    }
  }, [activatedTab, anchorStyle, itemRefs])

  return <TabMenuContext.Provider value={contextValue}>{children}</TabMenuContext.Provider>
}

export default TabMenuProvider
