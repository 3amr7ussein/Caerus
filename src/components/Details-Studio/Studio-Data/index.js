import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, Col, Row } from "antd"
import style from "./style.module.scss"

const { Content } = Layout

export default class StudioData extends Component {
  render() {
    return (
      <StaticQuery
        query={DataStudioQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <div className={style.discoverWrapper}>
                <Content>
                  <div className={style.gridView}>
                    <Row gutter={16}>
                      <Col span={12} xs={24} lg={12}>
                        <div className={style.locations}>
                          <p>Location</p>
                          {this.props.branches.map((branch, index) => (
                            <div key={`_${index}`}>
                              <div style={{ marginBottom: 17 }}>
                                <Img
                                  fixed={data.ic_marker.childImageSharp.fixed}
                                />

                                <span style={{ marginLeft: 8 }}>
                                  {branch.address}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={style.phones}>
                          <p>Phone</p>
                          <div style={{ marginBottom: 17 }}>
                            <Img fixed={data.ic_phone.childImageSharp.fixed} />

                            <span style={{ marginLeft: 8 }}>
                              {this.props.ownerPhone}
                            </span>
                          </div>
                          {/* <div style={{ marginBottom: 17 }}>
                            <Img
                              fixed={data.ic_landLine.childImageSharp.fixed}
                            />
                            <span style={{ marginLeft: 8 }}>
                              +20 2 1234 5678
                            </span>
                          </div> */}
                          <div className={style.follow}>
                            <p>Follow</p>
                            <div>
                              <Link to="/">
                                <Img
                                  style={{ marginRight: 16 }}
                                  fixed={data.ic_fb.childImageSharp.fixed}
                                />
                              </Link>

                              <Link to="/">
                                <Img
                                  style={{ marginRight: 16 }}
                                  fixed={data.ic_nstagram.childImageSharp.fixed}
                                />
                              </Link>
                              <Link to="/">
                                <Img
                                  style={{ marginRight: 16 }}
                                  fixed={data.ic_tweet.childImageSharp.fixed}
                                />
                              </Link>
                              <Link to="/">
                                <Img
                                  style={{ marginRight: 16 }}
                                  fixed={data.ic_youtube.childImageSharp.fixed}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                      {/* <Col span={12} xs={24} lg={12}>
                        Hello
                      </Col> */}
                    </Row>
                  </div>
                </Content>
              </div>
            </section>
          )
        }}
      />
    )
  }
}

const DataStudioQuery = graphql`
  query dataQueryIcons {
    ic_marker: file(absolutePath: { regex: "/ic_marker/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_phone: file(absolutePath: { regex: "/ic_phone/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_landLine: file(absolutePath: { regex: "/ic_landLine/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_fb: file(absolutePath: { regex: "/ic_fb/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_nstagram: file(absolutePath: { regex: "/ic_nstagram/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_tweet: file(absolutePath: { regex: "/ic_tweet/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_youtube: file(absolutePath: { regex: "/ic_youtube/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
