// styles
import { Wrapper, Title, Content } from './SubInfo.style'

interface Props {
  title: string
  content: string
}

const SubInfo = ({ title, content }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  )
}

export default SubInfo
