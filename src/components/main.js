import React from "react"

import mainStyles from "./main.module.css"
import Lead from "./lead"
import Section from "./section"
import MovieInfo from "./movie/info"
import Instructions from "./instructions"
import Wunderdog from "./partners/wunderdog"
import Vincit from "./partners/vincit"

const Main = () => (
  <main className={mainStyles.main}>
    <Section>
      <Lead />
    </Section>

    <Section>
      <MovieInfo />
    </Section>

    <Section title="How to attend?">
      <Instructions />
    </Section>

    <Section title="In collaboration with">
      <div className={mainStyles.logos}>
        <div className={mainStyles.logoWD}>
          <Wunderdog />
        </div>
        <div className={mainStyles.logo}>
          <Vincit />
        </div>
      </div>
    </Section>
  </main>
)

export default Main
