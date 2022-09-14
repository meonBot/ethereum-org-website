import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"

import Translation from "../components/Translation"
import ButtonLink from "./ButtonLink"
import Emoji from "./OldEmoji"
import Link from "./Link"

import { getImage, getSrc, ImageDataLike } from "../utils/image"

export interface IHide {
  shouldHide: boolean
}

export interface IPropsBase {
  children?: React.ReactNode
  alt: string
  artistName?: string
  artistUrl?: string
  src?: string
  shouldHide?: boolean
  title: string
}

interface IPropsWithSVG extends IPropsBase {
  svg: React.FC<React.SVGProps<SVGSVGElement> & { alt: string }>
  image?: never
}
interface IPropsWithImage extends IPropsBase {
  svg?: never
  image: ImageDataLike | null
}

export type IProps = IPropsWithImage | IPropsWithSVG

const Container = styled.div<IHide>`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  opacity: ${(props) => (props.shouldHide ? 0 : 1)};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: ${(props) => (props.shouldHide ? `none` : `flex`)};
  }
`

const Image = styled(GatsbyImage)`
  align-self: center;
  width: 100%;
`

const ImageContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.white700};
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
`

const ArtistSubtitle = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text300};
  margin-right: 0.5rem;
`

const Caption = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  border-left: 1px solid ${(props) => props.theme.colors.white700};
  border-bottom: 1px solid ${(props) => props.theme.colors.white700};
  border-right: 1px solid ${(props) => props.theme.colors.white700};
  border-radius: 0px 0px 4px 4px;
  padding: 0.5rem 1rem;
`

const ButtonContainer = styled.div`
  margin-top: 1rem;
`

// TODO add ability to download SVGs
const AssetDownload: React.FC<IProps> = ({
  alt,
  artistName,
  artistUrl,
  children,
  image,
  src,
  shouldHide = false,
  title,
  svg,
}) => {
  const baseUrl = `https://ethereum.org`
  const downloadUri = src ? src : image ? getSrc(image) : ""
  const downloadUrl = `${baseUrl}${downloadUri}`
  const Svg = svg

  return (
    <Container shouldHide={shouldHide}>
      <h4>{title}</h4>
      <div>
        {children && <ImageContainer>{children}</ImageContainer>}
        {!children && (
          <ImageContainer>
            {Svg && <Svg alt={alt} />}
            {image && <Image image={getImage(image)!} alt={alt} />}
          </ImageContainer>
        )}
        {artistName && (
          <Caption>
            <ArtistSubtitle>
              <Emoji text=":artist_palette:" mr={`0.5em`} />
              <Translation id="page-assets-download-artist" />
            </ArtistSubtitle>
            {artistUrl && <Link to={artistUrl}>{artistName}</Link>}
            {!artistUrl && <span>{artistName}</span>}
          </Caption>
        )}
      </div>
      <ButtonContainer>
        {!Svg && (
          <ButtonLink to={downloadUrl}>
            <Translation id="page-assets-download-download" />
          </ButtonLink>
        )}
      </ButtonContainer>
    </Container>
  )
}

export default AssetDownload
