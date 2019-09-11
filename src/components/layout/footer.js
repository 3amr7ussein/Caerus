import React, { Component } from "react"
import { Row, Col } from "antd"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

import style from "./style.module.scss"
import { StaticQuery, graphql } from "gatsby"
import FooterList from "../footer-list"

export default class Footer extends Component {
  state = {
    showLoginModalSection: false,
    showRegisterModalSection: false,
  }

  showLoginModal(showLoginModalSection) {
    this.setState({
      showLoginModalSection,
    })
  }
  showRegisterModal(showRegisterModalSection) {
    this.setState({
      showRegisterModalSection,
    })
  }
  render() {
    return (
      <StaticQuery
        query={FooterQuery}
        render={data => (
          <footer className={style.siteFooter}>
            <section className={style.footerContainer}>
              <Row gutter={4} className={style.row}>
                <Col span={4} lg={4} sm={24} xs={24}>
                  <Img fixed={data.logo_full.childImageSharp.fixed} />
                </Col>

                <Col span={14} lg={14} sm={24} xs={24}>
                  <Row className={style.row}>
                    <Col span={8} md={8} xs={12}>
                      <FooterList
                        title={"Caerus"}
                        list={[
                          { link: "/", title: "Home" },
                          { link: "/404", title: "About" },
                          { link: "/404", title: "Register" },
                          {
                            link: "/404",
                            // onClick:{onClick= this.showLoginModal(true)},
                            title: "Login",
                          },
                        ]}
                      />
                    </Col>
                    <Col span={8} md={8} xs={12}>
                      <FooterList
                        title={"Caerus"}
                        list={[
                          {
                            link: "/404",
                            title: "List your business",
                          },
                          { link: "/404", title: "Press" },
                          { link: "/q&a", title: "FAQ's" },
                          { link: "/404", title: "Link 4" },
                        ]}
                      />
                    </Col>
                    <Col span={8} md={8} xs={12}>
                      <FooterList
                        title={"Caerus"}
                        list={[
                          { link: "/404", title: "Terms of services" },
                          { link: "/404", title: "Privacy policy" },
                          { link: "/404", title: "Contact us" },
                          { link: "/404", title: "Link 4" },
                        ]}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col span={6} lg={6} sm={24} xs={24}>
                  <h5 className={style.footerLabel}>Available at</h5>
                  <div>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className={style.downloadLink}
                      href={
                        "https://play.google.com/store/apps/details?id=com.frond"
                      }
                    >
                      <Img fixed={data.app_googleplay.childImageSharp.fixed} />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className={style.downloadLink}
                      href={
                        "https://itunes.apple.com/us/app/frond/id1271333486?mt=8"
                      }
                    >
                      <Img fixed={data.app_appstore.childImageSharp.fixed} />
                    </a>
                  </div>
                  <br />
                  <h5 className={style.footerLabel}>Follow us on</h5>
                  <div className={style.socialWrapper}>
                    <a
                      rel="noopener noreferrer"
                      className={style.socialLink}
                      target="_blank"
                      href="https://www.facebook.com/thefrondapp/"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className={style.socialLink}
                      target="_blank"
                      href="http://instagram.com/thefrondapp"
                    >
                      <FaInstagram />
                    </a>
                    {/* <a
                      rel="noopener noreferrer"
                      className={style.socialLink}
                      target="_blank"
                      href="https://twitter.com/TheFrondApp"
                    /> */}
                  </div>
                </Col>
              </Row>
            </section>
            <div>
              <span className={style.copyrights}>
                MIYI Tech System for Software
              </span>
              <span className={style.copyrights}>01001388075</span>
              <span className={style.copyrights}>
                6, Mohamed Ezzat Street, Ard El Golf, Nasr City, Cairo, Egypt
              </span>
            </div>

            <span className={style.copyrights}>
              {`Copyrights © All Rights Reserved ${new Date().getFullYear()} |  MIYI Tech System for Software.`}
            </span>
          </footer>
        )}
      />
    )
  }
}
const FooterQuery = graphql`
  query FooterQuery {
    logo_full: file(absolutePath: { regex: "/Logo_Full/" }) {
      childImageSharp {
        fixed(width: 95, height: 104) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    app_googleplay: file(absolutePath: { regex: "/app_googleplay/" }) {
      childImageSharp {
        fixed(width: 38, height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    app_appstore: file(absolutePath: { regex: "/app_appstore/" }) {
      childImageSharp {
        fixed(width: 38, height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
