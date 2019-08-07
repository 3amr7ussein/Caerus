import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Layout, Col, Row } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"
import { isMobile } from "react-device-detect"
import img_dancer from "../../../static/Images/img_dancer.png"

const { Content } = Layout

// console.log("MOBILE", isMobile)

export default class GetStartedSection extends Component {
  state = {
    isSmallScreen: false,
  }
  window = null

  render() {
    return (
      <StaticQuery
        query={GetStartedQuery}
        render={data => {
          return (
            <section
              style={{
                backgroundColor: "white",
                height: "1220px",
                position: "relative",
              }}
            >
              <img src={img_dancer} className={style.imgStyle} />
              <section
                className={style.sectionStyle}
                style={style.sectionStyle}
                style={{
                  // backgroundImage: `url(${
                  //   img_getStarted5
                  // })`,
                  backgroundColor: "#f8f8f8",
                  backgroundRepeat: "no-repeat",
                  paddingTop: "0px",
                  backgroundPosition: "left bottom",
                }}
              >
                <div className={style.containerDiv}>
                  <Content className={"container"}>
                    <StyledHN header="h2" style={{ marginTop: 69, flex: 1 }}>
                      EXPLORE MORE CATEGORIES
                    </StyledHN>
                    <p className={style.subHeader}>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    {/* <div
                    className={style.exploreImage}
                    style={{
                      // height: 500,
                      // width:"50%",
                      // backgroundImage: `url(${
                      //   img_getStarted2
                      // })`,
                      // backgroundSize:"100% 100%"
                    }}
                  >
                  </div> */}
                    <div className={style.mediaContainer}>
                      <Row className={style.media}>
                        <Col lg={24} md={24} sm={24}>
                          <div>
                            <div className={style.note}>
                              <p style={{ paddingLeft: 20 }}>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the
                                Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator
                                on the Internet.
                              </p>
                            </div>

                            <BrandedButton
                              content={"Get Started"}
                              styles={{ float: "right" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Content>
                  {/* <div style={{ height:"190px", backgroundColor:"rgba(255,255,255)" }}></div> */}
                </div>

                {/* {!isMobile ? (
                <Img
                  className={style.roadImage}
                  fixed={data.img_road.childImageSharp.fixed}
                  style={{
                    position: "absolute",
                    bottom: -40,
                  }}
                />
              ) : null} */}
              </section>
            </section>
            // <section style={{ backgroundColor:"red", height:"1390px" }} >
            // <section
            //   className={style.sectionStyle}
            //   style={style.sectionStyle}
            //   style={{
            //     position: "relative",
            //     backgroundImage: `url(${
            //       img_getStarted5
            //     })`,
            //     backgroundColor:"#f8f8f8",
            //     backgroundRepeat: "no-repeat",
            //     paddingTop:'0px',
            //     backgroundPosition:"left bottom"

            //   }}

            // >
            //   <div
            //     className={style.containerDiv}
            //   >
            //     <Content className={"container"}>
            //       <StyledHN header="h2" style={{ marginTop: 69, flex: 1 }}>
            //           EXPLORE MORE CATEGORIES
            //       </StyledHN>
            //       <p className={style.subHeader}>
            //         There are many variations of passages of Lorem Ipsum
            //         available
            //       </p>
            //       {/* <div
            //         className={style.exploreImage}
            //         style={{
            //           // height: 500,
            //           // width:"50%",
            //           // backgroundImage: `url(${
            //           //   img_getStarted2
            //           // })`,
            //           // backgroundSize:"100% 100%"
            //         }}
            //       >
            //       </div> */}
            //       <div
            //         className={style.mediaContainer}
            //       >
            //         <Row className={style.media}>
            //           <Col lg={12} />
            //           <Col lg={24} md={24} sm={24}>
            //             <div>
            //               <div className={style.note}>
            //                 <p style={{ paddingLeft: 20 }}>
            //                   There are many variations of passages of Lorem
            //                   Ipsum available, but the majority have suffered
            //                   alteration in some form, by injected humour, or
            //                   randomised words which don't look even slightly
            //                   believable. If you are going to use a passage of
            //                   Lorem Ipsum, you need to be sure there isn't
            //                   anything embarrassing hidden in the middle of
            //                   text. All the Lorem Ipsum generators on the
            //                   Internet tend to repeat predefined chunks as
            //                   necessary, making this the first true generator on
            //                   the Internet.
            //                 </p>
            //               </div>

            //               <BrandedButton
            //                 content={"Get Started"}
            //                 styles={{ float: 'right' , }}
            //               />
            //             </div>
            //           </Col>
            //         </Row>
            //       </div>
            //     </Content>
            //     <div style={{ height:"190px", backgroundColor:"rgba(255,255,255)" }}></div>
            //   </div>

            //   {/* {!isMobile ? (
            //     <Img
            //       className={style.roadImage}
            //       fixed={data.img_road.childImageSharp.fixed}
            //       style={{
            //         position: "absolute",
            //         bottom: -40,
            //       }}
            //     />
            //   ) : null} */}

            // </section>

            // </section>
          )
        }}
      />
    )
  }
}

const GetStartedQuery = graphql`
  query GetStarted {
    img_getStarted5: file(absolutePath: { regex: "/img_getStarted5/" }) {
      childImageSharp {
        fixed(width: 730, height: 520) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img_road: file(absolutePath: { regex: "/img_road/" }) {
      childImageSharp {
        fixed(width: 1571, height: 93) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
