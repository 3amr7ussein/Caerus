import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import moment from "moment"

import ExploreClasses from "./Explore-Classes/Explore-Classes"
import BrandedButton from "../brandedButton/BrandedButton"

class ExplorePopular extends Component {
  // state = {
  //   range: [],
  //   prefCats: [],
  // }

  _updateWithRange(range) {
    range.length > 0 &&
      this.props.refreshHome({
        range,
      })
    range.length &&
      this.setState({
        range,
      })
  }

  // componentDidMount() {
  //   this.props.refreshHome({ range: [moment().toISOString()] })
  //   // this._updateWithRange([new Date().toISOString()])
  //   this.props.getCategories()
  // }

  render() {
    const groups = [
      // { name: "Studios", component: <ExploreStudios home={this.props.home} /> },
      {
        name: "Classes",
        component: !!(this.props.Home && this.props.Home.payload) ? (
          <ExploreClasses Classes={this.props.Home} />
        ) : null,
      },
    ]

    return (
      <StaticQuery
        query={PopularQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <div>
                {groups.map((group, index) => (
                  <div key={`_${index}`}>
                    {group.component}
                    <div style={{ textAlign: "center" }}>
                      <BrandedButton content="Show All" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePopular)

const PopularQuery = graphql`
  query PopularIcons {
    img_business: file(absolutePath: { regex: "/img_business/" }) {
      childImageSharp {
        fixed(width: 461, height: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
