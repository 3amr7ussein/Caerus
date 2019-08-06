import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"

import QandA from "../../components/QandA"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    // return null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Q&A Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <QandA />
        <section />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
