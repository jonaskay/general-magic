import React from "react"

const width = 560

const Trailer = () => (
  <iframe
    title="Official Trailer for General Magic"
    style={{ flex: `0 0 ${width}px` }}
    width={width}
    height="315"
    src="https://www.youtube-nocookie.com/embed/uTdyb-RWNKo?rel=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
)

export default Trailer
