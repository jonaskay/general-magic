import React from "react"

import footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.copyright}>
      © {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
