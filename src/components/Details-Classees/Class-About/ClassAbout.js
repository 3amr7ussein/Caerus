import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import { Layout, Col, Row, Rate, Tag, Divider } from "antd"
import style from "./style.module.scss"
import FirebaseImage from "../../FirebaseTmage"
import MarkAsFav from "../../MarkAsFav"

const { Content } = Layout

export default class ClassAbout extends Component {
  render() {
    return (
      <StaticQuery
        query={ClassAboutQuery}
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
                  <div className={style.gridView}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className={style.data} style={{ flex: 1 }}>
                        <div className={style.rate}>
                          <p>{this.props.classTitle}</p>
                          {this.props.classCat.map((cat, index) => (
                            <Tag color="#ff4200" key={`_${index}`}>
                              #{cat.name}
                            </Tag>
                          ))}
                        </div>
                      </div>
                      <div style={{ alignItems: "center" }}>
                        {/* <MarkAsFav
                          // navigation={this.props.navigation}
                          classId={this.props.classID}
                          style={{ alignContent: "center", paddingTop: 5 }}
                          form={`book_${
                            this.props.classID ? this.props.classID : 0
                          }`}
                          initialValues={{ classID: this.props.classID }}
                        />
                        <p>Save</p> */}
                      </div>
                    </div>
                    <Divider />
                    <Row gutter={16}>
                      <Col span={12}>
                        <Link
                          className={style.owner}
                          to={`/trainer/${this.props.trainers[0].id}`}
                        >
                          <div style={{ display: "flex" }}>
                            <FirebaseImage
                              fbref={this.props.trainers[0].avatar}
                              style={{ width: 70, hight: 70 }}
                            />
                          </div>
                          <div>
                            <div>
                              <span className={style.placeAndTrainer}>
                                {this.props.trainers[0].name}
                              </span>
                              <span className={style.trainerRole}>
                                {this.props.trainers[0].certifications}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col span={12}>
                        <Link
                          className={style.owner}
                          to={`/studio/${this.props.owner.id}`}
                        >
                          <div style={{ display: "flex" }}>
                            <FirebaseImage
                              fbref={this.props.owner.image}
                              style={{ width: 70, hight: 70 }}
                            />
                          </div>
                          <div>
                            <span className={style.placeAndTrainer}>
                              {this.props.owner.name}
                            </span>
                            <div className={style.rate}>
                              <Rate
                                disabled
                                defaultValue={this.props.owner.rating}
                              />
                              <span>(119 reviews)</span>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
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

const ClassAboutQuery = graphql`
  query ClassAboutIcons {
    ic_trainerIcon: file(absolutePath: { regex: "/ic_trainerIcon/" }) {
      childImageSharp {
        fixed(width: 75, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_studioIcon: file(absolutePath: { regex: "/ic_studioIcon/" }) {
      childImageSharp {
        fixed(width: 75, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
    ic_saved: file(absolutePath: { regex: "/ic_saved/" }) {
      childImageSharp {
        fixed(width: 48, height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
