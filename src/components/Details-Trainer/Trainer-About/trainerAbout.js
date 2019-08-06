import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, Tag } from "antd"
import style from "./style.module.scss"
import FirebaseImage from "../../FirebaseTmage"

const { Content } = Layout

export default class TrainerAbout extends Component {
  state = {
    screenHeight: 2000,
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
        query={TrainerAboutQuery}
        render={data => {
          return (
            <section
              style={{
                width: "100%",
                position: "relative",
                // height: this.state.screenHeight,
              }}
            >
              <div className={style.discoverWrapper}>
                <Content>
                  <div className={style.gridView}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className={style.data}>
                        <FirebaseImage
                          fbref={this.props.trainerAvatar}
                          style={{ width: 140, height: 140, borderRadius: 75 }}
                        />
                      </div>
                    </div>
                    <div className={style.gridView}>
                      <div className={style.data}>
                        <div className={style.rate}>
                          <p>{this.props.trainerName}</p>
                        </div>
                      </div>
                    </div>
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

const TrainerAboutQuery = graphql`
  query TrainerAboutIcons {
    img_avatarWoman: file(absolutePath: { regex: "/img_avatarWoman/" }) {
      childImageSharp {
        fixed(width: 137, height: 137) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_save: file(absolutePath: { regex: "/ic_save/" }) {
      childImageSharp {
        fixed(width: 48, height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
