import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Logo from "./logo"

const Vincit = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "vincit.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Logo
        fluid={data.logoImage.childImageSharp.fluid}
        url="https://www.vincit.fi/"
      />
    )}
  />
)

export default Vincit
