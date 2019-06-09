import React from "react"

import mainStyles from "./main.module.css"
import Lead from "./lead"
import Section from "./section"
import MovieInfo from "./movie/info"
import Instructions from "./instructions"

const Main = () => (
  <main className={mainStyles.main}>
    <Lead />
    <Section title="Trailer">
      <MovieInfo />
    </Section>
    <Section title="How to attend">
      <Instructions />
    </Section>
  </main>
)

export default Main
