import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import MyFavorite from "../../components/MyFavorite"
import QueryGetMyFav from "../../Graphql/QueryGetMyFav"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    // return null
    return (
      <Query
        client={graphQLClient}
        query={QueryGetMyFav}
        fetchPolicy={"network-only"}
      >
        {({ loading, error, data, ...results }) => {
          if (error || loading) return null

          return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO
                title="MyFavoriteClasses Page"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
              />
              <div
                style={{
                  width: "100%",
                  height: 64,
                  backgroundColor: "#ff4200",
                }}
              />
              <MyFavorite myFav={data.me.favClasses} />
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
