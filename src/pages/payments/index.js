import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"
import Header from "../../components/Header/Header"
import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import ProfilePayment from "../../components/ProfilePayment"
import QueryUserData from "../../Graphql/QueryUserData"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    // return null
    return (
      <Query
        client={graphQLClient}
        query={QueryUserData}
        fetchPolicy={"network-only"}
      >
        {({ loading, error, data, ...results }) => {
          if (error || loading) return null
          console.log("UderData", data)
          return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO
                title="MyProfile Page"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
              />
              <div
                style={{
                  width: "100%",
                  height: 64,
                  backgroundColor: "#ff4200",
                }}
              />
              <Header userInfo={data.me} />
              <div style={{ width: "100%", height: 48 }} />
              <ProfilePayment />
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
