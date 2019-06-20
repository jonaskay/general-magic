import React from "react"
import Img from "gatsby-image"

const Logo = ({ fluid, url }) => (
  <a href={url}>
    <Img fluid={fluid} />
  </a>
)

export default Logo
