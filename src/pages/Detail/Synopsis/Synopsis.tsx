// styles
import { Container, Content, Title } from './Synopsis.style'

interface Props {
  content: string
}

const Synopsis = ({ content }: Props) => {
  return (
    <Container>
      <Title>Synopsis</Title>
      <Content>{content}</Content>
    </Container>
  )
}

export default Synopsis
