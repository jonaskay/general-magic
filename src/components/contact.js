import React from "react"

const email = "joonas.kykkanen@wunder.dog"

const Contact = () => (
  <a href={`mailto:${email}?subject=General Magic`}>{email}</a>
)

export default Contact
