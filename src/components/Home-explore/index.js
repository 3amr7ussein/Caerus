import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import style from "./style.module.scss"
import { Input, Icon, DatePicker } from "antd"
import ic_search from "../../../static/Images/ic_search.png"
import ic_location from "../../../static/Images/ic_location.png"
import ic_nearMe from "../../../static/Images/ic_nearMe.png"

import RoundedLink from "../../components/RoundedLink/RoundedLink"

const InputGroup = Input.Group

export default class Explore extends Component {
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
        query={exploreQuery}
        render={data => {
          return (
            <section
              className={style.exploreImage}
              style={{
                height: 860,
                backgroundImage: `url(${
                  data.background.childImageSharp.fixed.src
                })`,
                justifyContent: "center",
              }}
            >
              <div className={style.discoverWrapper}>
                <div style={{ marginTop: 280 }}>
                  <h2 className={style.header}>Less Hassle. More Classe.</h2>
                  <p
                    style={{
                      color: "white",
                      paddingLeft: 4,
                    }}
                  >
                    Explore and Book Now
                  </p>
                  <InputGroup compact className={style.inputGroup}>
                    <Input
                      className={style.exploreInput}
                      style={{ width: "35%" }}
                      placeholder="Explore and Book Now"
                      prefix={
                        <img
                          src={ic_search}
                          alt="/"
                          style={{ paddingTop: 25 }}
                        />
                      }
                    />

                    <Input
                      className={style.exploreInput}
                      style={{ width: "25%" }}
                      placeholder="Location"
                      prefix={
                        <img
                          src={ic_location}
                          alt="/"
                          style={{ paddingTop: 25 }}
                        />
                      }
                      suffix={
                        <img
                          src={ic_nearMe}
                          alt="/"
                          style={{ paddingTop: 27 }}
                        />
                      }
                    />
                    <DatePicker style={{ width: "20%" }} />
                    <RoundedLink
                      content="EXPLORE"
                      redirect="/Explore"
                      styles={{
                        width: "20%",
                        textAlign: "center",
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
            </section>
          )
        }}
      />
    )
  }
}

const exploreQuery = graphql`
  query ExploreQuery {
    background: file(absolutePath: { regex: "/coverBg/" }) {
      childImageSharp {
        fixed(width: 1440, height: 1275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
