import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, Col, Row, List } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"

const { Content } = Layout

export default class BusinessSection extends Component {
  state = {
    screenHeight: 940,
  }
  window = null

  componentDidMount() {
    window &&
      this.setState({
        screenHeight: window.innerHeight,
      })
  }
  render() {
    return (
      <StaticQuery
        query={BusinessQuery}
        render={data => {
          const listItems = [
            {
              icon: data.ic_automatic.childImageSharp.fixed,
              title: "Create a beautiful profile for your business",
            },
            {
              icon: data.ic_groups.childImageSharp.fixed,
              title: "Access tools to manage your space",
            },
            {
              icon: data.ic_cashInHand.childImageSharp.fixed,
              title: "Accept bookings and grow your community",
            },
            {
              icon: data.ic_headset.childImageSharp.fixed,
              title: "Get paid, hassle free",
            },
            {
              icon: data.ic_mapMarker.childImageSharp.fixed,
              title: "Receive 24/7 customer support",
            },
          ]

          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Content>
                {/* Start The Header Of The Section */}

                <div style={{ backgroundColor: "#ff4200", paddingBottom: 48 }}>
                  <StyledHN
                    header="h2"
                    style={{
                      paddingTop: 69,
                      flex: 1,
                      color: "white",
                    }}
                  >
                    Promote your business, beautifully
                  </StyledHN>

                  <p className={style.subHeader}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </p>
                </div>

                {/* End The Header Of The Section */}

                {/* Start Image Of The Section */}
                {/* <div className={style.discoverWrapper}> */}
                <div
                  className={style.discoverBody}
                  style={{
                    height: 480,
                    backgroundImage: `url(${
                      data.img_business.childImageSharp.fixed.src
                    })`,
                  }}
                />
                {/* End Image Of The Section */}

                {/* Start List Of The Section */}
                <div className={style.dicoverList}>
                  <Row className={style.media}>
                    <Col lg={12} />
                    <Col lg={12} md={12}>
                      <List
                        footer={
                          <div>
                            <BrandedButton
                              content="Get Started"
                              styles={{ marginTop: 60, float: "right" }}
                            />
                          </div>
                        }
                        dataSource={listItems}
                        renderItem={item => (
                          <List.Item
                            style={{ borderBottom: "none", padding: 0 }}
                          >
                            <List.Item.Meta
                              avatar={<Img fixed={item.icon} />}
                              title={
                                <p
                                  style={{
                                    marginTop: 7,
                                    fontSize: 20,
                                  }}
                                >
                                  {item.title}
                                </p>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                </div>
                {/* End List Of The Section */}
                {/* </div> */}
              </Content>
            </section>
          )
        }}
      />
    )
  }
}

const BusinessQuery = graphql`
  query businessIcons {
    img_business: file(absolutePath: { regex: "/img_business/" }) {
      childImageSharp {
        fixed(width: 461, height: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_automatic: file(absolutePath: { regex: "/ic_automatic/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_groups: file(absolutePath: { regex: "/ic_groups/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_cashInHand: file(absolutePath: { regex: "/ic_cashInHand/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_headset: file(absolutePath: { regex: "/ic_headset/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_mapMarker: file(absolutePath: { regex: "/ic_mapMarker/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
