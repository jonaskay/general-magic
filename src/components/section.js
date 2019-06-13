import React from "react"
import PropTypes from "prop-types"

import sectionStyles from "./section.module.css"

const Section = ({ children, title }) => (
  <section className={sectionStyles.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Section
