import React from "react"

import leadStyles from "./lead.module.css"
import Contact from "./contact"

const Lead = () => (
  <div className={leadStyles.lead}>
    <p>
      Join us at Korjaamo in August for a special screening of the widely
      acclaimed documentary General Magic. This is an one-time-only event that
      you don't want to miss. Get ready for a night of inspiration and wonder!
    </p>
    <p>
      Contact <Contact primary /> for tickets and sponsorship opportunities
    </p>
  </div>
)

export default Lead
