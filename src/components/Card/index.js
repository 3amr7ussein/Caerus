import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Rate, Divider } from "antd"
import style from "./style.module.scss"
import FirebaseImage from "../FirebaseTmage"
import moment from "moment"
import BrandedButton from "../brandedButton/BrandedButton"

const { Meta } = Card

export default class CardData extends Component {
  render() {
    const {
      cover,
      categories,
      price,
      available,
      title,
      rate,
      location,
      time,
      trainer,
      place,
      id,
    } = this.props

    return (
      <StaticQuery
        query={CardQuery}
        render={data => {
          return (
            <div>
              <Card
                style={{ padding: 0 }}
                className={style.cardMeta}
                cover={<FirebaseImage fbref={cover} />}
              >
                <div>
                  <div className={style.cardTitle}>
                  <Link to="/">
                    {title}
                  </Link>
                  </div>
                  <div className={style.cardRate}>
                    <Rate disabled defaultValue={this.props.rate ? rate : 5} />
                    <span>(119 review)</span>
                  </div>
                  {this.props.time ? (
                    <div className={style.cardLocation}>
                      <Img fixed={data.ic_time.childImageSharp.fixed} />

                      <span className={style.cardLocationText}>
                        {moment(time).format("hh:mm")}
                      </span>
                    </div>
                  ) : null}
                  {this.props.trainer ? (
                    <div className={style.cardLocation}>
                      <Img fixed={data.ic_trainerName.childImageSharp.fixed} />

                      <span className={style.cardLocationText}>{trainer}</span>
                    </div>
                  ) : null}
                  {this.props.place ? (
                    <div className={style.cardLocation}>
                      <Img fixed={data.ic_studio.childImageSharp.fixed} />

                      <span className={style.cardLocationText}>{place}</span>
                    </div>
                  ) : null}
                  {this.props.location ? (
                    <div className={style.cardLocation}>
                      <Img fixed={data.ic_location.childImageSharp.fixed} />

                      <span className={style.cardLocationText}>{location}</span>
                    </div>
                  ) : null}
                  <Divider style={{ marginHorizontal: 16 }} />
                  {this.props.available || this.props.price ? (
                    <div className={style.cardFooter}>
                      <span className={style.cardPlacesText}>
                        {available} Available
                      </span>
                      <span className={style.cardPriceText}>{price} EGP</span>
                    </div>
                  ) : null}
                  <BrandedButton
                    redirect="/confirmation"
                    content="Book"
                    styles={{ width: "100%", lineHeight: 2 }}
                  />
                </div>
              </Card>
            </div>
          )
        }}
      />
    )
  }
}

const CardQuery = graphql`
  query CardQuery {
    ic_time: file(absolutePath: { regex: "/ic_time/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_trainerName: file(absolutePath: { regex: "/ic_trainerName/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ic_studio: file(absolutePath: { regex: "/ic_studio/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ic_location: file(absolutePath: { regex: "/ic_location/" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
