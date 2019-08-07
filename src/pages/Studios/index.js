import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import ExploreFilter from "../../components/Explore-Filter/ExploreFilter"
import StudioDetails from "../../components/Details-Studio"
import QueryEntity from "../../Graphql/QueryEntity"
import { Spin } from "antd"
import BrandedButton from "../../components/brandedButton/BrandedButton"

const moment = require("moment")

class BlogIndex extends React.Component {
  state = {
    limit: 6,
  }

  showMore() {
    this.setState({
      limit: this.state.limit + 3,
    })
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    let placeId = this.props.location.pathname.replace("/studio/", "")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="StudioDetails Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Query
          client={graphQLClient}
          query={QueryEntity}
          fetchPolicy={"network-only"}
          variables={{
            placeID: placeId,
            limit: this.state.limit,
            from: moment(2018).toISOString(),
          }}
        >
          {({ loading, error, data, fetchMore, ...results }) => {
            if (error) return null
            if (loading) {
              if (data && data.place) {
                return (
                  <>
                    <ExploreFilter />
                    <StudioDetails placeDetails={data.place} />
                    <div style={{ textAlign: "center" }}>
                      <Spin />
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <BrandedButton
                        content="Show All"
                        handelClick={() => this.showMore()}
                      />
                    </div>
                  </>
                )
              } else {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: 500,
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Spin size={"large"} />
                    <h3>Loading..</h3>
                  </div>
                )
              }
            }

            if (data && data.place)
              return (
                <>
                  <ExploreFilter />
                  <StudioDetails placeDetails={data.place} />

                  <div style={{ textAlign: "center" }}>
                    <BrandedButton
                      content="Show All"
                      handelClick={() => this.showMore()}
                    />
                  </div>
                </>
              )
          }}
        </Query>
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
