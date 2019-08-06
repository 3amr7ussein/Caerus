import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import moment from "moment"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"

import Explore from "../components/Home-explore"
import GetStartedSection from "../components/Home-getStarted/GetStartedSection"
import MobileAppSection from "../components/Home-mobile/MobileAppSection"
import BusinessSection from "../components/Home-Business/BusinessSection"
import HomeClasses from "../components/Home-Classes"
import CarouselSection from "../components/Home-Carousel/CarouselSection"

import HomeActions from "../Redux/HomeRedux"

class BlogIndex extends React.Component {
  state = {
    range: [],
  }

  componentDidMount() {
    this.props.refreshHome({ range: [moment().toISOString()] })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Explore />
        {!!(this.props.home && this.props.home.payload) && (
          <HomeClasses homeClasses={this.props.home.payload.upcoming} />
        )}

        <GetStartedSection />

        <MobileAppSection />
        <div style={{ height: 100, display: "lock", width: "100%" }} />

        <BusinessSection />
        <CarouselSection />
        {/* <HomeSeparator alternative text={"."} /> */}
      </Layout>
    )
  }
}
const mapStateToProps = state => {
  return {
    home: state.home,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshHome: args => dispatch(HomeActions.homeRequest(args)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogIndex)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
