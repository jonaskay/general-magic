import React from "react"
import contactStyles from "./contact.module.css"
const email = "joonas.kykkanen@wunder.dog"

const Contact = ({ primary }) => (
  <a
    className={primary ? contactStyles.primary : contactStyles.secondary}
    href={`mailto:${email}?subject=General Magic`}
  >
    {email}
  </a>
)

export default Contact
