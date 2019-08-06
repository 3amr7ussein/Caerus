import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, Col, Row, Input, Divider } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../brandedButton/BrandedButton"
import FilterOptions from "./Filter-Options"
import CategoriesOptions from "./Categories-Options"

const { Content } = Layout

export default class ExploreFilter extends Component {
  state = {
    showFilterSection: false,
  }
  window = null

  showFilter(e) {
    this.setState({
      showFilterSection: !this.state.showFilterSection,
    })
  }

  render() {
    return (
      <StaticQuery
        query={FilterQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <div className={style.boxStyle}>
                <div className={style.navDiv} />
                <div className={style.discoverWrapper}>
                  <Content>
                    {/* <div> */}
                    <Row gutter={16}>
                      <Col span={10} xs={24} md={12} lg={10}>
                        <Input
                          className={style.filterSearch}
                          placeholder="Gym"
                          prefix={
                            <Img fixed={data.ic_search.childImageSharp.fixed} />
                          }
                          style={{
                            display: "flex",
                            flexGrow: 1,
                          }}
                        />
                      </Col>
                      <Col span={10} xs={24} md={12} lg={10}>
                        <Input
                          className={style.filterSearch}
                          placeholder="Nearby"
                          style={{ paddingLeft: 35 }}
                          prefix={
                            <Img
                              fixed={data.ic_location.childImageSharp.fixed}
                            />
                          }
                          suffix={
                            <Img fixed={data.ic_nearby.childImageSharp.fixed} />
                          }
                          style={{
                            display: "flex",
                            flexGrow: 1,
                          }}
                        />
                      </Col>
                      <Col span={4} xs={24} lg={4}>
                        <div style={{ position: "relative" }}>
                          {/* <Img
                              fixed={data.ic_filter.childImageSharp.fixed}
                              style={{
                                position: "absolute",
                                top: 45,
                                left: 10,
                                zIndex: 3,
                              }}
                            />
                            <Img
                              fixed={data.ic_arrowDown.childImageSharp.fixed}
                              style={{
                                position: "absolute",
                                top: 45,
                                left: 350,
                                zIndex: 3,
                              }}
                            /> */}
                          <BrandedButton
                            content="Filter"
                            handelClick={() => this.showFilter()}
                            styles={{
                              width: 140,
                              marginBottom: 24,
                              marginTop: 32,
                              fontSize: 20,
                              fontWeight: "normal",
                              fontFamily: "Helvetica",
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                    {/* </div> */}
                    {this.state.showFilterSection ? (
                      <>
                        <Divider className={style.dividerText}>
                          Select one or more days
                        </Divider>
                        <FilterOptions />
                        <CategoriesOptions />
                      </>
                    ) : (
                      <div />
                    )}

                    <BrandedButton
                      content="EXPLORE"
                      styles={{ marginBottom: 32 }}
                    />
                  </Content>
                </div>
              </div>
            </section>
          )
        }}
      />
    )
  }
}

const FilterQuery = graphql`
  query FilterIcons {
    ic_search: file(absolutePath: { regex: "/ic_search/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_location: file(absolutePath: { regex: "/ic_location/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_nearby: file(absolutePath: { regex: "/ic_nearby/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_filter: file(absolutePath: { regex: "/ic_filter/" }) {
      childImageSharp {
        fixed(width: 21, height: 21) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_arrowDown: file(absolutePath: { regex: "/ic_arrowDown/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
