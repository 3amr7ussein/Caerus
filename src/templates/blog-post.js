import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"

import style from "./style.module.scss"

class BlogPostTemplate extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title

    // return null
    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title={post.frontmatter.title}
          // description={post.frontmatter.description || post.excerpt}
        />
        <section
          className={style.heroWrapper}
          style={{
            backgroundImage: `url(${
              post.frontmatter.image.childImageSharp.fluid.src
            })`,
          }}
        >
          <sup />
          <h1>{post.frontmatter.title}</h1>
        </section>
        <section>
          <div
            className={style.markDownFormatter}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
        {/* <hr
          style={{
            marginBottom: rhythm(1),
          }}
        /> */}
        {/* <Bio /> */}
        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}{" "}
        */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
