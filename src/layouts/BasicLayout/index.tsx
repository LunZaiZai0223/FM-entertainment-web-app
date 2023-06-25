import { Outlet } from 'react-router-dom'

const BasicLayout = () => {
  return (
    <>
      <h1>Basic layout</h1>
      <Outlet />
    </>
  )
}

export default BasicLayout
