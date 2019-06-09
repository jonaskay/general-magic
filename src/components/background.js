import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import backgroundStyles from "./background.module.css"

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={backgroundStyles.background}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    )}
  />
)
export default Background
