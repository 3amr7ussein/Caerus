import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import ExploreFilter from "../../components/Explore-Filter/ExploreFilter"
import ClassDetails from "../../components/Details-Classees"
import QuerySingleWorkClass from "../../Graphql/QuerySingleWorkClass"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)

    let classId = this.props.location.pathname.replace("/classes/", "")
    // return null
    return (
      <Query
        client={graphQLClient}
        query={QuerySingleWorkClass}
        fetchPolicy={"network-only"}
        variables={{
          classID: classId,
        }}
      >
        {({ loading, error, data, ...results }) => {
          if (error || loading) return null

          return (
            <Layout location={this.props.location}>
              <SEO
                title="ClassesDetails Page"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
              />
              <div
                style={{
                  width: "100%",
                  height: 64,
                  backgroundColor: "#ff4200",
                }}
              />
              <ExploreFilter />
              <ClassDetails singleClassDetails={data.singleWorkClass} />
              <section />
            </Layout>
          )
        }}
      </Query>
    )
  }
}

export default BlogIndex
