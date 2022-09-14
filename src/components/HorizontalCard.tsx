import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import Emoji from "./OldEmoji"

const StyledCard = styled.div`
  border-radius: 4px;
  display: flex;
`

const Content = styled.div`
  flex: 0 1 75%;
  margin-left: 2rem;
`

const Description = styled.p`
  opacity: 0.8;
  margin-top: -1rem;
  margin-bottom: 0.5rem;
`

const Title = styled.p`
  font-size: 1.25rem;
`

export interface IProps {
  children?: React.ReactNode
  emoji: string
  title?: ReactNode
  description: ReactNode
  className?: string
  emojiSize?: number
}

const HorizontalCard: React.FC<IProps> = ({
  emoji,
  title,
  description,
  children,
  className,
  emojiSize,
}) => (
  <StyledCard className={className}>
    <Emoji size={emojiSize} text={emoji} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Content>
  </StyledCard>
)

export default HorizontalCard
