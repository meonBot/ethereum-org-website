import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const StyledCard = styled.div`
  background: ${(props) => props.theme.colors.searchBackground};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  padding: 1.5rem;
`

const Image = styled(GatsbyImage)`
  & > img {
    width: 3em !important;
    height: 3em !important;
    margin-bottom: 1em !important;
  }
`

const Description = styled.p`
  opacity: 0.8;
`

export interface IProps {
  children?: React.ReactNode
  image: IGatsbyImageData
  alt: string
  title: string
  description: string
  className?: string
}

const ImageCard: React.FC<IProps> = ({
  image,
  alt,
  title,
  description,
  children,
  className,
}) => (
  <StyledCard className={className}>
    <Image image={image} alt={alt} />
    <h3>{title}</h3>
    <Description>{description}</Description>
    {children}
  </StyledCard>
)

export default ImageCard
