import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
//import { graphQLClient } from "../../Services/Api"
import Invoice from "../../components/Invoice"

class BlogIndex extends React.Component {
  render() {
    // console.log("ClassDataFromExplore", this.props.location.state)
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // let classId = this.props.location.pathname.replace("/invoice/", "")
    // return null
    // return (
    //   <Query
    //     client={graphQLClient}
    //     query={QuerySingleWorkClass}
    //     fetchPolicy={"network-only"}
    //     variables={{
    //       classID: classId,
    //     }}
    //   >
    // {({ loading, error, data, ...results }) => {
    //   if (error || loading) return null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Invoice Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div
          style={{ width: "100%", height: 64, backgroundColor: "#ff4200" }}
        />
        <Invoice singleClassDetails={data.singleWorkClass} />
        <section />
      </Layout>
    )
  }
}
//       </Query>
//     )
//   }
// }

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
