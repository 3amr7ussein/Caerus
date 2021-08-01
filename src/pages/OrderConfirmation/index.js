import React from "react"
import { graphql } from "gatsby"
// import { Query } from "react-apollo"
// import { graphQLClient } from "../../Services/Api"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import Confirmation from "../../components/Confirmation/index"

// import QueryMe from "../../Graphql/QueryMe"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Confirmation"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div
          style={{ width: "100%", height: 64, backgroundColor: "#ff4200" }}
        />
        <Confirmation />
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
