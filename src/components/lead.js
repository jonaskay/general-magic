import React from "react"

import leadStyles from "./lead.module.css"
import Contact from "./contact"

const Lead = () => (
  <section className={leadStyles.lead}>
    <p>
      Join us at Korjaamo in August for a special screening of the widely
      acclaimed documentary General Magic. This is a one-time-only event that
      you don't want to miss. Get ready for a night of inspiration and wonder!
    </p>
    <p>
      Contact <Contact /> for tickets and sponsorship opportunities
    </p>
    <p>Watch the trailer below and scroll down for more info</p>
  </section>
)

export default Lead
