import React from "react"

import mainStyles from "./main.module.css"
import Lead from "./lead"
import Section from "./section"
import MovieInfo from "./movie/info"
import Instructions from "./instructions"
import Wunderdog from "./partners/wunderdog"

const Main = () => (
  <main className={mainStyles.main}>
    <Section>
      <Lead />
    </Section>
    <div className={mainStyles.section}>
      <Section title="Trailer">
        <MovieInfo />
      </Section>
    </div>
    <div className={mainStyles.section}>
      <Section title="How to attend">
        <Instructions />
      </Section>
    </div>
    <div className={mainStyles.partnersOuter}>
      <div className={mainStyles.partnersInner}>
        <Section title="Partners">
          <Wunderdog />
        </Section>
      </div>
    </div>
  </main>
)

export default Main
