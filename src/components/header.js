import React from "react"

import headerStyles from "./header.module.css"
import Background from "./background"
import Quote from "./quote"

const Header = () => (
  <header className={headerStyles.header}>
    <Background />
    <div className={headerStyles.inner}>
      <aside className={headerStyles.column}>
        <ul>
          <li>
            <Quote
              url="https://www.theverge.com/2018/4/22/17233362/general-magic-movie-review-documentary-silicon-valley-tribeca-2018"
              text="'General Magic is a reminder of how compelling stories about technology can be.'"
              author="The Verge"
            />
          </li>
          <li>
            <Quote
              url="https://www.forbes.com/sites/charliefink/2018/04/20/general-magic-doc-is-full-of-life-lessons-for-inventors/#50de89293e6e"
              text="'Poignant, entertaining and full of life lessons from the small and personal to the universal.'"
              author="Forbes"
            />
          </li>
          <li>
            <Quote
              url="https://www.rottentomatoes.com/m/general_magic"
              text="100%"
              author="Rotten Tomatoes"
            />
          </li>
        </ul>
      </aside>
      <div className={headerStyles.column}>
        <h1 className={headerStyles.heading}>
          <span>General</span>
          <span>Magic</span>
        </h1>
        <h2 className={headerStyles.subheading}>
          in <span>Helsinki</span>
        </h2>
      </div>
      <aside className={headerStyles.column}>
        <ul>
          <li>
            <Quote
              url="http://www.filmjournal.com/woman-walks-ahead-and-general-magic-are-eye-openers-tribeca-2018"
              text="'The biggest eye-opener of Tribeca 2018'"
              author="Film Journal"
            />
          </li>
          <li>
            <Quote
              url="https://appleinsider.com/articles/18/05/11/general-magic-tells-story-of-apple-vets-who-created-a-smartphone-15-years-too-early"
              text="'A fascinating look at what it means to fail, and whether a failure that changed the world is really a failure at all.'"
              author="Apple Insider"
            />
          </li>

          <li>
            <Quote
              url="https://variety.com/2019/film/reviews/general-magic-review-1203209810/"
              text="'A captivating history lesson with global appeal.'"
              author="Variety"
            />
          </li>
        </ul>
      </aside>
    </div>
    <div className={headerStyles.fade} />
  </header>
)

export default Header
