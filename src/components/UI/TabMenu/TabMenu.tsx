import { ReactNode, useLayoutEffect } from 'react'

// providers
import TabMenuProvider, { TabMenuProviderProps } from './TabMenuProvider'

// hooks
import useTabMenu from './useTabMenu'

// styles
import { TabListContainer, TabListWrapper, TabItemContainer, TabAnchor } from './TabMenu.style'

type ItemProps = {
  children: ReactNode
  item: TabItemType
}

type TabItemType = {
  title: ReactNode
  value: any
}

type ListProps = {
  items: TabItemType[]
  renderItem: (item: TabItemType) => ReactNode
}

type TabContentProps = {
  value: any
  children: ReactNode
}

const getAnchorStyle = ({
  activatedTabIndex,
  eles,
}: {
  activatedTabIndex: number
  eles: HTMLLIElement[]
}) => {
  const styleConfig = {
    width: 0,
    left: 0,
  }

  const currentEle = eles[activatedTabIndex]
  const movedLeft = eles
    .slice(0, activatedTabIndex)
    .reduce((accumulator, currentEle) => accumulator + currentEle.offsetWidth, 0)

  styleConfig.width = currentEle.offsetWidth
  styleConfig.left = movedLeft

  return styleConfig
}

const TabList = ({ items, renderItem }: ListProps) => {
  const { anchorStyle, onSetAnchorStyle, activatedTab, itemRefs } = useTabMenu()

  useLayoutEffect(() => {
    const activatedTabIndex = items.findIndex((item) => item.value === activatedTab)
    onSetAnchorStyle(getAnchorStyle({ activatedTabIndex, eles: itemRefs.current }))
  }, [activatedTab])

  return (
    <TabListContainer>
      <TabListWrapper>
        {items.map((item) => {
          return renderItem(item)
        })}
        <TabAnchor {...anchorStyle} />
      </TabListWrapper>
    </TabListContainer>
  )
}

// eslint-disable-next-line react/display-name
const TabItem = ({ children, item }: ItemProps) => {
  const { activatedTab, onSetActivatedTab, onAddRef } = useTabMenu()

  return (
    <TabItemContainer
      ref={(ele) => ele && onAddRef(ele)}
      onClick={() => (onSetActivatedTab ? onSetActivatedTab(item.value) : undefined)}
      isActive={activatedTab === item.value}
    >
      {children}
    </TabItemContainer>
  )
}

const TabContent = ({ value, children }: TabContentProps) => {
  const { activatedTab } = useTabMenu()

  if (value !== activatedTab) return null

  return <>{children}</>
}

const TabMenu = ({ children, activatedTab, onChange }: TabMenuProviderProps) => {
  return (
    <TabMenuProvider activatedTab={activatedTab} onChange={onChange}>
      {children}
    </TabMenuProvider>
  )
}

TabMenu.TabList = TabList
TabMenu.TabItem = TabItem
TabMenu.TabContent = TabContent

export default TabMenu
