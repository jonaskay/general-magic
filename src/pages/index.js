import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1>General Magic in Helsinki</h1>
    <p>People like us need documentaries like this</p>
    <p>
      We are screening the widely acclaimed tech documentary General Magic in
      Helsinki this August. It's a private event for techies and change makers
      of our beautiful city. The documentary will aspire you and teach you how
      failure can lead to something truly amazing. But to really know more,
      watch the trailer below and scroll down for more info.
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/uTdyb-RWNKo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <aside>
      <h4>Official description</h4>
      <p>
        Multi-award winning documentary General Magic is the untold tale of how
        a great vision and epic failure changed the world.
      </p>
      <p>
        The ideas that dominate the tech industry and our day to day lives were
        born at a secretive Silicon Valley start-up called ‘General Magic’,
        which spun out of Apple in 1990 to create the first handheld personal
        communicator (or “smartphone”). The film combines rare archival footage
        with powerful honesty from the “Magicians” today, reflecting on the most
        influential Silicon Valley company no one has ever heard of. Featuring
        legendary members of the original Macintosh team, along with the
        creators of the iPod, iPhone, Android, and eBay, this is the story of
        one of history’s most talented tech teams, who after a great failure,
        went on to change the lives of billions.
      </p>
      <p>Find out more at https://www.generalmagicthemovie.com/</p>
    </aside>
    <p>
      Join us at Korjaamo in August for a special screening of General Magic!
      This is a one-time-only event that you don't want to miss. Be part of
      something unique and exciting.
    </p>
    <h2>Participate</h2>
    <p>
      Is your company interested? Or do you want us to offer tickets for your
      company? Contact joonas.kykkanen@wunderdog.fi with subject line General
      Magic.
    </p>
    <p>
      Seats are limited. We are doing only one screening. Act now. Your
      coworkers will thank you for it.
    </p>
  </Layout>
)

export default IndexPage
