import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Layout, List, Card, Rate } from "antd"
import moment from "moment"

import style from "./style.module.scss"
import BrandedButton from "../../brandedButton/BrandedButton"
import FirebaseImage from "../../FirebaseTmage"
import BookingPartic from "../../Modal/BookingPartic"
import CardData from "../../Card"

const { Content } = Layout

class TrainerClasses extends Component {
  state = {
    showBookingSection: false,
  }

  showBookingModal(showBookingSection) {
    this.setState({
      showBookingSection,
    })
  }

  render() {
    console.log("TrainerClasses", this.props.classes)
    return (
      <StaticQuery
        query={TrainerClassesQuery}
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
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 2,
                      md: 2,
                      lg: 3,
                    }}
                    itemLayout="horizontal"
                    dataSource={this.props.classes}
                    renderItem={item => (
                      <List.Item>
                        <div>
                          <Link to={`/classes/${item.id}`}>
                            <CardData
                              cover={item.owner.cover}
                              id={item.id}
                              title={item.title}
                              time={item.startAt}
                              trainer={this.props.trainerName}
                              place={item.owner.name}
                            />
                          </Link>
                          <BrandedButton
                            styles={{
                              height: 44,
                              width: 300,
                            }}
                            content="Book"
                            handelClick={() => this.showBookingModal(true)}
                          />
                        </div>
                      </List.Item>
                    )}
                  />
                </Content>
              </div>
              <BookingPartic
                Visibility={this.state.showBookingSection}
                onCancel={() => this.setState({ showBookingSection: false })}
                onSubmitSuccess={() => {
                  this.setState({ showBookingSection: false })
                }}
              />
            </section>
          )
        }}
      />
    )
  }
}

export default TrainerClasses

const TrainerClassesQuery = graphql`
  query TrainerClassesQuery {
    img_classesCover: file(absolutePath: { regex: "/img_classesCover/" }) {
      childImageSharp {
        fixed(width: 300, height: 204) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_time: file(absolutePath: { regex: "/ic_time/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_trainerName: file(absolutePath: { regex: "/ic_trainerName/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
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
