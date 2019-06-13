import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import footerStyles from "./footer.module.css"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        footerImage: file(relativePath: { eq: "footer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <footer className={footerStyles.footer}>
        <Img
          fluid={data.footerImage.childImageSharp.fluid}
          className={footerStyles.image}
        />
        <div className={footerStyles.copyright}>
          © {new Date().getFullYear()}
        </div>
      </footer>
    )}
  />
)

export default Footer
