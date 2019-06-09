import React from "react"

import headerStyles from "./header.module.css"
import Background from "./background"

const Header = () => (
  <header className={headerStyles.header}>
    <Background />
    <div className={headerStyles.inner}>
      <h1 className={headerStyles.heading}>
        <span>General</span>
        <span>Magic</span>
      </h1>
      <h2 className={headerStyles.subheading}>
        in <span>Helsinki</span>
      </h2>
    </div>
    <div className={headerStyles.fade} />
  </header>
)

export default Header
