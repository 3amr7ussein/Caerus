import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, Rate, Tag, Divider } from "antd"
import style from "./style.module.scss"
import FirebaseImage from "../../FirebaseTmage"

const { Content } = Layout

export default class StudioAbout extends Component {
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
        query={StudioAboutQuery}
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
                      <div style={{ display: "flex" }}>
                        <FirebaseImage
                          fbref={this.props.ownerImage}
                          style={{ width: 137, height: 137 }}
                        />
                      </div>

                      <div className={style.data} style={{ flex: 1 }}>
                        <div className={style.rate}>
                          <p>{this.props.ownerName}</p>
                          <Rate disabled defaultValue={this.props.ownerRate} />
                          <span>(119 review)</span>
                        </div>
                        {/* <div>
                          <Tag color="#ff4200">#dance</Tag>
                          <Tag color="#ff4200">#fitness</Tag>
                          <Tag color="#ff4200">#gym</Tag>
                        </div> */}
                      </div>
                      {/* <div style={{ alignItems: "center" }}>
                        <Img
                          style={{
                            display: "block",
                          }}
                          fixed={data.ic_save.childImageSharp.fixed}
                        />
                        <span style={{ alignItems: "center" }}>Save</span>
                      </div> */}
                    </div>

                    <Divider />
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

const StudioAboutQuery = graphql`
  query StudioAboutIcons {
    ic_save: file(absolutePath: { regex: "/ic_save/" }) {
      childImageSharp {
        fixed(width: 48, height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
