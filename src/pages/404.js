import React from "react"
import { graphql } from "gatsby"
import { Spin } from "antd"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: 400,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
          <h2>This page under maintenance </h2>
          <p>Back to home and book your class</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
