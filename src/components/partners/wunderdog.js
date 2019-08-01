import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Logo from "./logo"

const Wunderdog = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "wunderdog_white.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Logo
        fluid={data.logoImage.childImageSharp.fluid}
        url="https://wunder.dog/"
      />
    )}
  />
)

export default Wunderdog
