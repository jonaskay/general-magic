import React from "react"

import trailerStyles from "./trailer.module.css"

const Trailer = () => (
  <iframe
    title="Official Trailer for General Magic"
    className={trailerStyles.iframe}
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/uTdyb-RWNKo?rel=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
)

export default Trailer
