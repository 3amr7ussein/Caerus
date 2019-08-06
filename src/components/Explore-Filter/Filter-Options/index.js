import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, List } from "antd"
import style from "./style.module.scss"

const { Content } = Layout
const moment = require("moment")

const listItem = [
  {
    type: "DATE",
    day: moment().add(0, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(1, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(2, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(3, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(4, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(5, "days"),
    date: "21 April",
  },
  {
    type: "DATE",
    day: moment().add(6, "days"),
    date: "21 April",
  },
  {
    type: "CALENDER",
    day: moment().add(7, "days"),
    date: "21 April",
  },
]

export default class FilterOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      data: [],
      isModalVisible: false,
    }
  }

  componentDidMount() {
    if (this.state.selected.length <= 0) {
      setTimeout(() => {
        this.setState({ selected: [listItem[0].day] })
      }, 1)
    }
  }
  //   _openCalender() {
  //     this.setState({
  //       isModalVisible: true,
  //     })
  //   }
  existsInArray(day) {
    return !!(this.state.selected.filter(el => el === day).length > 0)
  }

  selectDate(day) {
    if (this.state.selected && !this.existsInArray(day)) {
      this.setState({
        selected: [...this.state.selected, day],
      })
    } else {
      this.setState({
        selected: this.state.selected.filter(el => el !== day),
      })
    }
    setTimeout(() => {
      this.props.onSelection &&
        this.props.onSelection(
          this.state.selected.map(el => new Date(el).toISOString())
        )
    }, 1)
  }
  render() {
    const today = moment().format("dddd")
    // const selectedDates = this.state.selected.reduce(
    //   (o, key) =>
    //     Object.assign(o, {
    //       [moment(key).format("YYYY-MM-DD")]: { selected: true },
    //     }),
    //   {}
    // )

    return (
      <StaticQuery
        query={FilterOptionsQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Content>
                <div className={style.discoverWrapper}>
                  <Img fixed={data.ic_calendar.childImageSharp.fixed} />

                  <List
                    grid={{
                      gutter: 16,
                      xs: 2,
                      sm: 3,
                      md: 4,
                      lg: 7,
                      xl: 7,
                      xxl: 7,
                    }}
                    dataSource={listItem}
                    renderItem={item => {
                      const { day, type } = item

                      //   const textStyle = []
                      //   if (this.existsInArray(day)) {
                      //     cellStyle.push(style.daySelected)
                      //     textStyle.push(style.textSelected)
                      //   }
                      return (
                        <List.Item>
                          <div
                            onClick={() =>
                              type === "DATE"
                                ? this.selectDate(item.day)
                                : this._openCalender()
                            }
                            className={style.listItem}
                          >
                            <a href="/" className={style.dayButton}>
                              {type === "DATE" ? (
                                day.format("dddd") === today ? (
                                  "Today"
                                ) : (
                                  <div>
                                    <span
                                      style={{
                                        display: "block",
                                        // color: "black",
                                      }}
                                    >
                                      {item.day.format("dddd")}
                                    </span>
                                    <span
                                      style={{
                                        display: "block",
                                        // color: "black",
                                      }}
                                    >
                                      {item.day.format("Do MMM")}
                                    </span>
                                  </div>
                                )
                              ) : (
                                "More +"
                              )}
                            </a>
                          </div>
                        </List.Item>
                      )
                    }}
                  />
                </div>
              </Content>
            </section>
          )
        }}
      />
    )
  }
}

const FilterOptionsQuery = graphql`
  query FilterOptionsIcons {
    ic_calendar: file(absolutePath: { regex: "/ic_calendar/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_hashtag: file(absolutePath: { regex: "/ic_location/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
