import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import Checkout from '../../components/Checkout/index';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
  

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Checkout"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div
          style={{ width: "100%", height: 64, backgroundColor: "#ff4200" }}
        />
        <Checkout />
        
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
