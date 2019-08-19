import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import moment from "moment"

import Layout from "../../components/layout/index"
import SEO from "../../components/seo/index"
import ExplorePopular from "../../components/Explore-Popular"
import ExploreFilter from "../../components/Explore-Filter/ExploreFilter"

import HomeActions from "../../Redux/HomeRedux"
import CategoriesActions from "../../Redux/CategoriesRedux"

// const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
// const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD hh:mm');

class BlogIndex extends React.Component {
  state = {
    range: [],
  }

  componentDidMount() {
    this.props.refreshHome({ range: [moment().toISOString()] })
    this.props.getCategories()
  }

  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Explore Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div
          style={{ width: "100%", height: 64, backgroundColor: "#ff4200" }}
        />
        <ExploreFilter />
        <ExplorePopular Home={this.props.home} />
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
    getCategories: () => dispatch(CategoriesActions.categoriesRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogIndex)
