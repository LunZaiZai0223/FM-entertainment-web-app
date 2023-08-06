// styles
import { Header, Title, CaptionWrapper, Caption, ActionLink } from './SectionHeader.style'

interface Props {
  title: string
  caption?: string
  isSecondary?: boolean
}

const SectionHeader = ({ title, caption, isSecondary }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      {caption && (
        <CaptionWrapper isSecondary={isSecondary}>
          <Caption isSecondary={isSecondary}>{caption}</Caption>
        </CaptionWrapper>
      )}
      <ActionLink to='more'>SEE MORE</ActionLink>
    </Header>
  )
}

export default SectionHeader
