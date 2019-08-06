import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import ExploreFilter from "../../components/Explore-Filter/ExploreFilter"
import TrainerDetails from "../../components/Details-Trainer"
import QueryTrainer from "../../Graphql/QueryTrainer"
import BrandedButton from "../../components/brandedButton/BrandedButton"
import { Spin } from "antd"
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
    let trainerId = this.props.location.pathname.replace("/trainer/", "")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="TrainerDetails Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Query
          client={graphQLClient}
          query={QueryTrainer}
          fetchPolicy={"network-only"}
          variables={{
            trainerID: trainerId,
            limit: this.state.limit,
            from: moment(2018).toISOString(),
          }}
        >
          {({ loading, error, data, fetchMore, ...results }) => {
            if (error) return null
            if (loading) {
              if (data && data.trainer) {
                return (
                  <div>
                    <ExploreFilter />
                    <TrainerDetails singleTrainerDetails={data.trainer} />
                    <div style={{ textAlign: "center" }}>
                      <Spin />
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <BrandedButton
                        content="Show All"
                        handelClick={() => this.showMore()}
                      />
                    </div>
                  </div>
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

            if (data && data.trainer)
              return (
                <>
                  <ExploreFilter />
                  <TrainerDetails singleTrainerDetails={data.trainer} />

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
