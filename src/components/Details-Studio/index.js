import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Layout, Divider } from "antd"

import style from "./style.module.scss"
import FirebaseImage from "../FirebaseTmage"
import StudioAbout from "./Studio-About/studioAbout"
import StudioData from "./Studio-Data"
import About from "../About"
import StudioClasses from "./Studio-Classes"
import StudioTrainers from "./Stadio-Trainers"
import StudioReviews from "./Studio-Reviews"
import FilterOptions from "../Explore-Filter/Filter-Options"

const { Content } = Layout

export default class StudioDetails extends Component {
  //   state = {
  //     screenHeight: 1000,
  //   }
  //   window = null

  //   componentDidMount() {
  //     window &&
  //       this.setState({
  //         screenHeight: window.innerHeight,
  //       })
  //   }
  render() {
    return (
      <StaticQuery
        query={StudioDetailsQuery}
        render={data => {
          return (
            <Content>
              <section className={style.exploreImage}>
                <FirebaseImage fbref={this.props.placeDetails.cover} />
              </section>
              <section>
                <StudioAbout
                  ownerImage={this.props.placeDetails.image}
                  ownerName={this.props.placeDetails.name}
                  ownerRate={this.props.placeDetails.rating}
                />
                <StudioData
                  branches={this.props.placeDetails.branches}
                  ownerPhone={this.props.placeDetails.user.phone.number}
                />
                <About
                  aboutHead="About Studio"
                  aboutContent={this.props.placeDetails.description}
                />
                <div className={style.discoverWrapper}>
                  <Divider className={style.dividerText}>Classes</Divider>
                </div>
                <div className={style.discoverWrapper}>
                  <FilterOptions />
                </div>
                <StudioClasses
                  classes={this.props.placeDetails.classes}
                  // trainerName={this.props.placeDetails.classes.trainers[0].name}
                />
                <StudioTrainers
                  trainers={this.props.placeDetails.trainers}
                  ownerName={this.props.placeDetails.name}
                />
                <StudioReviews />
              </section>
            </Content>
          )
        }}
      />
    )
  }
}

const StudioDetailsQuery = graphql`
  query StudioDetailsIcons {
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
