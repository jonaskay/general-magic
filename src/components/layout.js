/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div style={{ position: "relative", backgroundColor: "#0A2246" }}>
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
