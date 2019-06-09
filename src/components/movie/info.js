import React from "react"

import infoStyles from "./info.module.css"
import Trailer from "./trailer"
import Description from "./description"

const Info = () => (
  <div className={infoStyles.info}>
    <Trailer />
    <div className={infoStyles.description}>
      <Description />
    </div>
  </div>
)

export default Info
