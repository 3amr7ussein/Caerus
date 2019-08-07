import React from "./node_modules/react"
import { graphql } from "./node_modules/gatsby"
import { Query } from "./node_modules/react-apollo"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import { graphQLClient } from "../../Services/Api"

import ExploreFilter from "../../components/Explore-Filter/ExploreFilter"
import ClassDetails from "../../components/Details-Classees"
import QuerySingleWorkClass from "../../Graphql/QuerySingleWorkClass"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
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
            <Layout location={this.props.location} title={siteTitle}>
              <SEO
                title="TrainerDetails Page"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
