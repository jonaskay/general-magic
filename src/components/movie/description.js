import React from "react"

import descriptionStyles from "./description.module.css"

const domain = "www.generalmagicthemovie.com"

const Description = () => (
  <div className={descriptionStyles.info}>
    <p>
      Multi-award winning documentary General Magic is the untold tale of how a
      great vision and epic failure changed the world.
    </p>
    <p>
      The ideas that dominate the tech industry and our day to day lives were
      born at a secretive Silicon Valley start-up called ‘General Magic’, which
      spun out of Apple in 1990 to create the first handheld personal
      communicator (or “smartphone”). The film combines rare archival footage
      with powerful honesty from the “Magicians” today, reflecting on the most
      influential Silicon Valley company no one has ever heard of. Featuring
      legendary members of the original Macintosh team, along with the creators
      of the iPod, iPhone, Android, and eBay, this is the story of one of
      history’s most talented tech teams, who after a great failure, went on to
      change the lives of billions.
    </p>
    <p>
      Find out more at <a className={descriptionStyles.link} href={`https://${domain}/`}>{domain}</a>
    </p>
  </div>
)

export default Description
