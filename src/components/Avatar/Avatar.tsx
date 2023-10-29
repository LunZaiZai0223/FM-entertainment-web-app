import { useNavigate } from 'react-router-dom'

// styles
import { AvatarContainer } from './Avatar.style'
import { RouterPathMap } from '../../constants/routerPathMap.constant'

const Avatar = () => {
  const navigate = useNavigate()

  const handleNavigateAccountPage = () => {
    navigate({ pathname: RouterPathMap.My() })
  }

  return <AvatarContainer onClick={handleNavigateAccountPage} />
}

export default Avatar
