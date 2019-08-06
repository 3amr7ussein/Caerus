import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, List, Divider } from "antd"
import style from "./style.module.scss"
import { connect } from "react-redux"

import CategoriesActions from "../../../Redux/CategoriesRedux"

const { Content } = Layout
// const moment = require("moment")

class CategoriesOptions extends Component {
  state = {
    selected: [],
  }

  componentDidMount() {
    this.props.getCategories()
  }

  existsInArray(category) {
    return !!(this.state.selected.filter(el => el === category).length > 0)
  }

  selectCategory(category) {
    if (this.state.selected && !this.existsInArray(category)) {
      this.setState({
        selected: [...this.state.selected, category],
      })
    } else {
      this.setState({
        selected: this.state.selected.filter(el => el !== category),
      })
    }
    setTimeout(() => {
      this.props.onSelection &&
        this.props.onSelection(this.state.selected.map(el => el.id))
    }, 1)
  }
  render() {
    return (
      <StaticQuery
        query={CategoriesOptionsQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Content>
                <Divider className={style.dividerText}>
                  Select one or more categories
                </Divider>
                <div className={style.discoverWrapper}>
                  <Img fixed={data.ic_hashtag.childImageSharp.fixed} />

                  {this.props.categories != null && (
                    <List
                      grid={{
                        gutter: 16,
                        xs: 2,
                        md: 4,
                        lg: 8,
                        xl: 8,
                        xxl: 8,
                      }}
                      dataSource={this.props.categories}
                      renderItem={(item, index) => {
                        let rowData = item
                        const cellStyle = [style.catItem]
                        const textStyle = [style.catText]

                        if (this.existsInArray(rowData)) {
                          cellStyle.push(style.catSelected)
                          textStyle.push(style.textSelected)
                        }
                        return (
                          <List.Item>
                            <div className={cellStyle}>
                              <a onClick={() => this.selectCategory(rowData)}>
                                <span className={textStyle}>
                                  {rowData.name}
                                </span>
                              </a>
                            </div>
                          </List.Item>
                        )
                      }}
                    />
                  )}
                </div>
              </Content>
            </section>
          )
        }}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(CategoriesActions.categoriesRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesOptions)

const CategoriesOptionsQuery = graphql`
  query CategoriesOptionsIcons {
    ic_hashtag: file(absolutePath: { regex: "/ic_hashtag/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
