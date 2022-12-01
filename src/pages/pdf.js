// NPM
import React from "react"

// Components
import Layout from "src/components/layout"
import Seo from "src/components/seo"
import Hero from 'src/components/Home/Hero'
import WorkHistory from 'src/components/Home/WorkHistory'
import Portfolio from 'src/components/Home/Portfolio'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero expanded />
    <Portfolio expanded />
    <WorkHistory expanded />
  </Layout>
)

export default IndexPage
