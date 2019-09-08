import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Layout, Divider } from "antd"
import style from "./style.module.scss"
import Data from "../Data"
import About from "../About"
import ClassAbout from "./Class-About/ClassAbout"
import FirebaseImage from "../FirebaseTmage"
import BrandedButton from "../brandedButton/BrandedButton"

const { Content } = Layout

export default class ClassDetails extends Component {
  render() {
    console.log("ClassDetails", this.props.singleClassDetails)
    return (
      <StaticQuery
        query={ClassDetailsQuery}
        render={data => {
          return (
            <Content>
              <section className={style.exploreImage}>
                <FirebaseImage
                  fbref={this.props.singleClassDetails.owner.cover}
                />
              </section>
              <section>
                <div style={{ paddingBottom: 48 }}>
                  <ClassAbout
                    classID={this.props.singleClassDetails.id}
                    trainers={this.props.singleClassDetails.trainers}
                    owner={this.props.singleClassDetails.owner}
                    classTitle={this.props.singleClassDetails.title}
                    classCat={this.props.singleClassDetails.categories}
                  />
                </div>

                {/* <div className={style.discoverWrapper}>
                  <div style={{ paddingBottom: 32 }}>
                    <FilterOptions />
                  </div>
                </div> */}
                {/* <div className={style.discoverWrapper}>
                  <ClassTime />
                </div> */}

                <About
                  aboutHead="Class Overview"
                  aboutContent={this.props.singleClassDetails.description}
                />
                <div className={style.discoverWrapper}>
                  <Divider />
                </div>

                <Data branch={this.props.singleClassDetails.branch} />
                <div style={{ textAlign: "center" }}>
                  <BrandedButton
                    redirect={`/confirmation/${
                      this.props.singleClassDetails.id
                    }`}
                    // redirect="/confirmation"
                    content="Book"
                    styles={{ lineHeight: 2 }}
                  />
                </div>
              </section>
            </Content>
          )
        }}
      />
    )
  }
}

const ClassDetailsQuery = graphql`
  query ClassDetailsIcons {
    img_studioCoverLarge: file(
      absolutePath: { regex: "/img_studioCoverLarge/" }
    ) {
      childImageSharp {
        fixed(width: 1440, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
