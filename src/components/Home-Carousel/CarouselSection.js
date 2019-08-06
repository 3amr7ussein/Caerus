import { StaticQuery, graphql } from "gatsby"
import { Layout, Col, Row, Carousel } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import ic_johnDoe from "../../../static/Images/ic_johnDoe.png"
import ic_arrowNext from "../../../static/Images/ic_arrowNext.png"
import ic_arrowPrev from "../../../static/Images/ic_arrowPrev.png"
import React, { Component } from "react"
// import { Carousel, Icon } from "antd";

const { Content } = Layout

export default class CarouselSection extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = React.createRef()
  }
  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className={style.containerStyle}>
        <img
          src={ic_arrowPrev}
          onClick={this.previous}
          className={style.leftArrow}
        />
        <Carousel dots={false} ref={node => (this.carousel = node)} {...props}>
          <div className={style.editedClass}>
            <Row gutter={16}>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className={style.editedClass}>
            <Row gutter={16}>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className={style.editedClass}>
            <Row gutter={16}>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8} xs={24} lg={8}>
                <div>
                  <div>
                    <h5
                      style={{ color: "#F8F8F8" }}
                      className={style.headingStyle}
                    >
                      Caroline Purton
                    </h5>
                    <span
                      style={{ color: "#F8F8F8" }}
                      className={style.spanStyle}
                    >
                      Wedding Planner
                    </span>
                    <div
                      style={{ width: "20px", height: "3px" }}
                      className={style.littleDiv}
                    />
                    <p style={{ color: "black" }}>
                      “ It is a long established fact that a reader will be
                      distracted by the readable content of a page. ”
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
        <img
          src={ic_arrowNext}
          onClick={this.next}
          className={style.rightArrow}
        />
      </div>
    )
  }
}

const CarouselQuery = graphql`
  query CarouselIcons {
    ic_dumbbell: file(absolutePath: { regex: "/dumbbell/" }) {
      childImageSharp {
        fixed(width: 96, height: 61) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
