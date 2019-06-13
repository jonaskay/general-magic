import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wunderdog = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "wunderdog.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <a href="https://wunder.dog/">
        <Img fluid={data.logoImage.childImageSharp.fluid} />
      </a>
    )}
  />
)

export default Wunderdog
