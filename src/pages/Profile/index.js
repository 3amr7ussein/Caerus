import React from "./node_modules/react"
import { graphql } from "./node_modules/gatsby"
import { Query } from "./node_modules/react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import MyProfile from "../../components/MyProfile"
import QueryMe from "../../Graphql/QueryMe"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    // return null
    return (
      <Query
        client={graphQLClient}
        query={QueryMe}
        fetchPolicy={"network-only"}
      >
        {({ loading, error, data, ...results }) => {
          if (error || loading) return null

          return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO
                title="MyProfile Page"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
              />

              <MyProfile myData={data.me} />
              <section />
            </Layout>
          )
        }}
      </Query>
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
