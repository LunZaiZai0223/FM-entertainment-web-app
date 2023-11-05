import { NavLink, Outlet, useLocation } from 'react-router-dom'

// constants
import { RouterPathMap } from '../../constants/routerPathMap.constant'

// components
import TabMenu from '../../components/UI/TabMenu'

// styles
import { Container, PageContainer } from './My.style'

// local constants
const FAVORITE = 1
const BASIC_SETTINGS = 2

const getCurrentTabIndex = (currentPathname: string) => {
  switch (currentPathname) {
    case RouterPathMap.MY_BASIC_SETTINGS():
      return BASIC_SETTINGS

    default:
      return FAVORITE
  }
}

const My = () => {
  const { pathname } = useLocation()
  const activatedTabIndex = getCurrentTabIndex(pathname)

  const tabContentList = [
    {
      title: <NavLink to={''}>Favorite</NavLink>,
      content: <Outlet />,
      value: FAVORITE,
    },
    {
      title: <NavLink to={'basic-settings'}>Basic Settings</NavLink>,
      content: <Outlet />,
      value: BASIC_SETTINGS,
    },
  ]

  return (
    <Container>
      <TabMenu activatedTab={activatedTabIndex}>
        <TabMenu.TabList
          items={tabContentList}
          renderItem={(item) => {
            return (
              <TabMenu.TabItem key={item.value} item={item}>
                {item.title}
              </TabMenu.TabItem>
            )
          }}
        />
        <PageContainer>
          {tabContentList.map((item, index) => {
            return (
              <TabMenu.TabContent key={index} value={item.value}>
                {item.content}
              </TabMenu.TabContent>
            )
          })}
        </PageContainer>
      </TabMenu>
    </Container>
  )
}

export default My
