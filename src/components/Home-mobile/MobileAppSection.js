import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, Col, Row, List } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import img_mobileCaerus from "../../../static/Images/img_mobileCaerus.png"
import img_circle from "../../../static/Images/img_circle.png"

const { Content } = Layout

export default class MobileAppSection extends Component {
  render() {
    const listItems = [
      {
        title: "Mobile App for iOS & Android.",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Mobile App for iOS & Android.",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Mobile App for iOS & Android.",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Mobile App for iOS & Android.",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Mobile App for iOS & Android.",
        subtitle:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ]
    return (
      <StaticQuery
        query={MobileSectionQuery}
        render={data => {
          return (
            <section className={style.dadSection}>
              <img src={img_mobileCaerus} className={style.imgStyle} />
              <img src={img_circle} className={style.imgCircleStyle} />

              <section className={style.discoverWrapper}>
                <Content>
                  <div className={style.discoverBody}>
                    <Row className={style.media}>
                      <Col lg={24} md={24} sm={24}>
                        <List
                          header={
                            <div className={style.listHeader}>
                              <StyledHN
                                header="h3"
                                style={{ marginBottom: 0, textAlign: "start" }}
                              >
                                CAERUS Mobile App
                              </StyledHN>
                              <div>
                                <Img
                                  fixed={data.ic_dot.childImageSharp.fixed}
                                />
                                <span
                                  style={{
                                    marginLeft: 11,
                                    fontSize: 32,
                                    fontFamily: "Helvetica",
                                  }}
                                >
                                  Mobile App for iOS & Android.
                                </span>
                              </div>
                            </div>
                          }
                          dataSource={listItems}
                          renderItem={item => (
                            <List.Item
                              style={{ borderBottom: "none", marginBottom: 0 }}
                            >
                              <List.Item.Meta
                                avatar={
                                  <Img
                                    fixed={data.ic_disc.childImageSharp.fixed}
                                  />
                                }
                                title={
                                  <p
                                    style={{
                                      fontSize: 22,
                                    }}
                                  >
                                    {item.title}
                                  </p>
                                }
                                description={
                                  <p className={style.description}>
                                    {item.subtitle}
                                  </p>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </Col>
                    </Row>
                  </div>
                  <Row className={style.downloadLinks}>
                    <Col
                      span={12}
                      style={{ paddingRight: 10, paddingLeft: 10 }}
                    >
                      <Img
                        style={{ float: "right" }}
                        fixed={data.img_android.childImageSharp.fixed}
                      />
                    </Col>
                    <Col
                      span={12}
                      style={{ paddingRight: 10, paddingLeft: 10 }}
                    >
                      <Img
                        style={{ float: "left" }}
                        fixed={data.img_appStore.childImageSharp.fixed}
                      />
                    </Col>
                  </Row>
                </Content>
              </section>
            </section>
          )
        }}
      />
    )
  }
}

const MobileSectionQuery = graphql`
  query MobileQuery {
    img_android: file(absolutePath: { regex: "/img_android/" }) {
      childImageSharp {
        fixed(width: 140, height: 44) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img_appStore: file(absolutePath: { regex: "/img_appStore/" }) {
      childImageSharp {
        fixed(width: 140, height: 44) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_disc: file(absolutePath: { regex: "/ic_disc/" }) {
      childImageSharp {
        fixed(width: 12, height: 12) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img_mobileScreen1: file(absolutePath: { regex: "/img_mobileScreen1/" }) {
      childImageSharp {
        fixed(width: 300, height: 719) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_dot: file(absolutePath: { regex: "/ic_dot/" }) {
      childImageSharp {
        fixed(width: 12, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
