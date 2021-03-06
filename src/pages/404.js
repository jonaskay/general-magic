import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import notFoundModule from "./not-found.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={notFoundModule.content}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a href="/">Back to General magic Helsinki</a>
    </div>
  </Layout>
)

export default NotFoundPage
