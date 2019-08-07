import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Layout, Divider } from "antd"
import style from "./style.module.scss"
import About from "../About"
import TrainerClasses from "./TrainerClasses"
import TrainerAbout from "./Trainer-About/trainerAbout"
import FilterOptions from "../Explore-Filter/Filter-Options"

const { Content } = Layout

export default class TrainerDetails extends Component {
  render() {
    // console.log(this.props.singleTrainerDetails)
    return (
      <StaticQuery
        query={TrainerDetailsQuery}
        render={data => {
          return (
            <Content>
              <section className={style.exploreImage} />
              <section>
                <div className={style.orangeBlock} />
                <TrainerAbout
                  trainerName={this.props.singleTrainerDetails.name}
                  trainerAvatar={this.props.singleTrainerDetails.avatar}
                />
                <About
                  aboutHead="About Trainer"
                  aboutContent={this.props.singleTrainerDetails.bio}
                />
                <div className={style.discoverWrapper}>
                  <Divider className={style.dividerText}>Classes</Divider>
                </div>
                <div className={style.discoverWrapper}>
                  <FilterOptions />
                </div>
                <TrainerClasses
                  classes={this.props.singleTrainerDetails.training}
                  trainerName={this.props.singleTrainerDetails.name}
                />
              </section>
            </Content>
          )
        }}
      />
    )
  }
}

const TrainerDetailsQuery = graphql`
  query TrainerDetailsIcons {
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
