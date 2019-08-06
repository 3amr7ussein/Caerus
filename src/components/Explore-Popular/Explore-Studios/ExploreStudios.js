import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, Divider, List, Card, Rate } from "antd"
import style from "./style.module.scss"
import { connect } from "react-redux"

const { Content } = Layout

class ExploreStudios extends Component {
  // state = {
  //   screenHeight: 500,
  // }
  // window = null

  // componentDidMount() {
  //   window &&
  //     this.setState({
  //       screenHeight: window.innerHeight,
  //     })
  // }
  render() {
    const listItems = [
      {
        title: " Spin Away Studio",
        location: "  Nasr City, Cairo",
      },
      {
        title: " Spin Away Studio",
        location: "  Nasr City, Cairo",
      },
      {
        title: " Spin Away Studio",
        location: "  Nasr City, Cairo",
      },
    ]

    return (
      <StaticQuery
        query={ExploreStudiosQuery}
        render={data => {
          return (
            <section
              style={{
                // backgroundColor: "#9b9b9b",
                width: "100%",
                position: "relative",
              }}
            >
              <div className={style.discoverWrapper}>
                <Content>
                  <Divider className={style.dividerText}>Studios</Divider>

                  <div className={style.cards}>
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                      }}
                      dataSource={listItems}
                      renderItem={item => (
                        <List.Item>
                          <Link to="/Studios">
                            <Card
                              style={{ width: 300, padding: 0 }}
                              className={style.cardMeta}
                              cover={
                                <Img
                                  fixed={
                                    data.img_studioCover.childImageSharp.fixed
                                  }
                                />
                              }
                            >
                              <div>
                                <Link className={style.studioLink}>
                                  {item.title}
                                </Link>
                                <div className={style.rate}>
                                  <Rate disabled defaultValue={4} />
                                  <span>(119 review)</span>
                                </div>

                                <div className={style.location}>
                                  <Img
                                    fixed={
                                      data.ic_location.childImageSharp.fixed
                                    }
                                  />

                                  <span className={style.locationText}>
                                    {item.location}
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </Link>
                        </List.Item>
                      )}
                    />
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
const mapStateToProps = state => {
  return {
    homeClasses: state.classes,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreStudios)

const ExploreStudiosQuery = graphql`
  query StudiosQuery {
    img_studioCover: file(absolutePath: { regex: "/img_studioCover/" }) {
      childImageSharp {
        fixed(width: 300, height: 204) {
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
  }
`
