import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTheme } from "@emotion/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"

import { translateMessageId } from "../utils/translations"
import { getImage } from "../utils/image"

export interface IProps {}

const Logo: React.FC<IProps> = () => {
  const intl = useIntl()
  const theme = useTheme()
  const isDarkTheme = theme.isDark
  const data = useStaticQuery(graphql`
    {
      dark: file(relativePath: { eq: "ef-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 100
            layout: FIXED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      light: file(relativePath: { eq: "ef-logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 100
            layout: FIXED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `)

  const image = isDarkTheme ? data.light : data.dark
  return (
    <GatsbyImage
      image={getImage(image)!}
      alt={translateMessageId("ethereum-foundation-logo", intl)}
    />
  )
}

export default Logo
