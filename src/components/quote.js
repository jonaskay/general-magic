import React from "react"
import PropTypes from "prop-types"

import quoteStyles from "./quote.module.css"

const Quote = ({ url, text, author }) => (
  <>
    <blockquote className={quoteStyles.blockquote} cite={url}>
      {text}
    </blockquote>
    <a className={quoteStyles.author} href={url}>
      {author}
    </a>
  </>
)

Quote.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Quote
