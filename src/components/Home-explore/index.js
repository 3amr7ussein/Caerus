import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import style from "./style.module.scss"
import { Input, DatePicker } from "antd"

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
                      style={{ width: "35%" }}
                      defaultValue="input content"
                    />
                    <Input
                      style={{ width: "25%" }}
                      defaultValue="input content"
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
