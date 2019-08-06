import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, Divider, List, Card, Rate } from "antd"
import style from "./style.module.scss"
import FirebaseImage from "../../FirebaseTmage"

const { Content } = Layout

class StudioTrainers extends Component {
  render() {
    return (
      <StaticQuery
        query={StudioTrainersQuery}
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
                      dataSource={this.props.trainers}
                      renderItem={item => (
                        <List.Item>
                          <Link to={`/trainer/${item.id}`}>
                            <Card
                              style={{ width: 300, padding: 0 }}
                              className={style.cardMeta}
                              cover={
                                <div className={style.avatarBackground}>
                                  <FirebaseImage
                                    fbref={item.avatar}
                                    style={{ width: 156, height: 156 }}
                                  />
                                </div>
                              }
                            >
                              <div>
                                <Link
                                  className={style.studioLink}
                                  to={`/trainer/${item.id}`}
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
                                    {this.props.ownerName}
                                  </span>
                                </div>
                              </div>
                              {/* <CardData
                              cover={item.avatar}
                              title={item.name}
                              location={this.props.ownerName}
                            /> */}
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

export default StudioTrainers

const StudioTrainersQuery = graphql`
  query StudioTrainersQuery {
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
