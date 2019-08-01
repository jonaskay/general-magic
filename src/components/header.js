import React from "react"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "./header.module.css"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        headerImage: file(relativePath: { eq: "general_magic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header className={headerStyles.header}>
        <div className={headerStyles.inner}>
          <div className={headerStyles.column}>
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              className={headerStyles.image}
            />
          </div>
        </div>
      </header>
    )}
  />
)

export default Header
