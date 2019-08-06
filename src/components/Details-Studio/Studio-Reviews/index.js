import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, List, Card, Rate, Divider } from "antd"
import style from "./style.module.scss"

const { Content } = Layout
const { Meta } = Card

export default class StudioReviews extends Component {
  // state = {
  //     screenHeight: 940,
  //   }
  //   window = null

  //   componentDidMount() {
  //     window &&
  //       this.setState({
  //         screenHeight: window.innerHeight,
  //       })

  render() {
    const listitems = [
      {
        title: "Ahmed Mohamed",
        rate: 3,
        comment:
          " “ Noura is patient and gives u the attention needed to nail the move properly. She is friendly, sweet and always encourages u to perfection. :) ” ",
      },
      {
        title: "Ahmed Mohamed",
        rate: 4,
        comment:
          " “ Noura is patient and gives u the attention needed to nail the move properly. She is friendly, sweet and always encourages u to perfection. :) ” ",
      },
      {
        title: "Ahmed Mohamed",
        rate: 4,
        comment:
          " “ Noura is patient and gives u the attention needed to nail the move properly. She is friendly, sweet and always encourages u to perfection. :) ” ",
      },
      {
        title: "Ahmed Mohamed",
        rate: 5,
        comment:
          " “ Noura is patient and gives u the attention needed to nail the move properly. She is friendly, sweet and always encourages u to perfection. :) ” ",
      },
    ]

    return (
      <StaticQuery
        query={StudioReviewsQuery}
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
                  <Divider className={style.dividerText}>Reviews</Divider>
                  <div className={style.cards}>
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        lg: 2,
                      }}
                      dataSource={listitems}
                      renderItem={item => (
                        <List.Item>
                          <Link to="/">
                            <Card>
                              <Meta
                                avatar={
                                  <Img
                                    fixed={
                                      data.ic_reviewAvatar.childImageSharp.fixed
                                    }
                                  />
                                }
                                title={item.title}
                                description={
                                  <Rate disabled defaultValue={item.rate} />
                                }
                              />
                              <Divider />
                              <div>
                                <span>{item.comment}</span>
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

const StudioReviewsQuery = graphql`
  query StudioReviewsIcons {
    ic_reviewAvatar: file(absolutePath: { regex: "/ic_reviewAvatar/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
