import React from "react"

import instructionsStyles from "./instructions.module.css"
import Contact from "./contact"

const Instructions = () => (
  <div className={instructionsStyles.instructions}>
    <p>
      Korjaamo screening is a private event. We are bringing the documentary to
      Finland for <strong>techies, innovators, and change makers</strong> of
      Helsinki.
    </p>
    <p>
      The best way to make sure you get a ticket is to <strong>act now</strong>{" "}
      and contact <Contact />.
    </p>
    <p>
      Let Joonas know if your company is interested in the event, or if you want
      us to offer tickets for your company. Seats are limited and we are doing
      only one screening.
    </p>
  </div>
)

export default Instructions
