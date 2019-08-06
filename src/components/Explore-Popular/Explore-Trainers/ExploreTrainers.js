import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, Divider, List, Card, Rate } from "antd"
import style from "./style.module.scss"

const { Content } = Layout

class ExploreTrainers extends Component {
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
        name: "Angela Frank",
        location: "Spin Away Studio",
      },
      {
        name: "Angela Frank",
        location: "Spin Away Studio",
      },
      {
        name: "Angela Frank",
        location: "Spin Away Studio",
      },
    ]

    return (
      <StaticQuery
        query={ExploreTrainersQuery}
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
                  <Divider className={style.dividerText}>Trainers</Divider>

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
                          <Link to="/Trainers">
                            <Card
                              style={{ width: 300, padding: 0 }}
                              className={style.cardMeta}
                              cover={
                                <div className={style.avatarBackground}>
                                  <Img
                                    fixed={
                                      data.img_avatarWoman.childImageSharp.fixed
                                    }
                                  />
                                </div>
                              }
                            >
                              <div>
                                <Link
                                  className={style.studioLink}
                                  to="/Trainers"
                                >
                                  {item.name}
                                </Link>
                                <div className={style.rate}>
                                  <Rate disabled defaultValue={4} />
                                  <span>(119 review)</span>
                                </div>

                                <div className={style.location}>
                                  <Img
                                    fixed={data.ic_studio.childImageSharp.fixed}
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

export default ExploreTrainers

const ExploreTrainersQuery = graphql`
  query TrainersQuery {
    img_avatarWoman: file(absolutePath: { regex: "/img_avatarWoman/" }) {
      childImageSharp {
        fixed(width: 156, height: 156) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_studio: file(absolutePath: { regex: "/ic_studio/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
