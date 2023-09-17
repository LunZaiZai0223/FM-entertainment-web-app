// styles
import { Header, Title, CaptionWrapper, Caption, ActionLink } from './SectionHeader.style'

interface Props {
  title: string
  caption?: string
  isSecondary?: boolean
  goToMorePath?: string
}

const SectionHeader = ({ title, caption, isSecondary, goToMorePath }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      {caption && (
        <CaptionWrapper isSecondary={isSecondary}>
          <Caption isSecondary={isSecondary}>{caption}</Caption>
        </CaptionWrapper>
      )}
      {goToMorePath && <ActionLink to={goToMorePath}>SEE MORE</ActionLink>}
    </Header>
  )
}

export default SectionHeader
