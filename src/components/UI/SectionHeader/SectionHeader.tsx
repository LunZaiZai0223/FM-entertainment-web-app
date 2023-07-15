// styles
import { Header, Title, CaptionWrapper, Caption, ActionLink } from './SectionHeader.style'

interface Props {
  title: string
  caption?: string
}

const SectionHeader = ({ title, caption }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      {caption && (
        <CaptionWrapper>
          <Caption>{caption}</Caption>
        </CaptionWrapper>
      )}
      <ActionLink to='more'>SEE MORE</ActionLink>
    </Header>
  )
}

export default SectionHeader
