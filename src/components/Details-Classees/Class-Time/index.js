import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { List } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../../brandedButton/BrandedButton"
import BookingPartic from "../../Modal/BookingPartic"

export default class ClassTime extends Component {
  state = {
    showBookingSection: false,
  }

  showBookingModal(showBookingSection) {
    this.setState({
      showBookingSection,
    })
  }

  render() {
    const listItem = [
      {
        from: "1:00pm",
        to: "2:00pm",
      },
      {
        from: "2:00pm",
        to: "3:00pm",
      },
    ]
    return (
      <StaticQuery
        query={ClassTimeQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <div className={style.listBox}>
                <List
                  style={{
                    borderBottom: "none",
                    marginBottom: 0,
                  }}
                  dataSource={listItem}
                  renderItem={item => (
                    <List.Item>
                      <div className={style.box}>
                        <div className={style.boxInner}>
                          <div style={{ flex: 1 }}>
                            <Img
                              className={style.imgTime}
                              fixed={data.ic_classTime.childImageSharp.fixed}
                            />
                            <div style={{ display: "inline" }}>
                              <span className={style.from}>
                                From:{" "}
                                <span className={style.time}>{item.from}</span>
                              </span>
                              <span className={style.from}>
                                To:{" "}
                                <span className={style.time}>{item.to}</span>{" "}
                                EET
                              </span>
                            </div>
                          </div>

                          <div className={style.button}>
                            <BrandedButton
                              content="Book"
                              styles={{ width: 132, height: 44 }}
                              handelClick={() => this.showBookingModal(true)}
                            />
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
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

const ClassTimeQuery = graphql`
  query ClassTimeIcons {
    ic_classTime: file(absolutePath: { regex: "/ic_classTime/" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
