import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import LeftMenu from "./LeftMenu"
import RightMenu from "./RightMenu"
import { Drawer, Button } from "antd"
import style from "./style.module.scss"

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isScrolled: false,
      current: "mail",
      visible: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 64
      if (isTop !== true) {
        this.setState({ isScrolled: true })
      } else {
        this.setState({ isScrolled: false })
      }
    })
  }
  showDrawer = () => {
    this.setState({ visible: !this.state.visible })
  }

  onClose = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <StaticQuery
        query={LayoutStaticQuery}
        render={data => {
          return (
            <div className={this.state.isScrolled ? style.nav : style.scrolled}>
              <nav className={style.menuBar}>
                <div className={style.logo}>
                  <img
                    alt="/"
                    className={"brandLogo"}
                    src={data.brand_logo_white.childImageSharp.fixed.src}
                  />
                </div>
                <div className={style.menuCon}>
                  <div className={style.leftMenu}>
                    <LeftMenu />
                  </div>
                  <div className={style.rightMenu}>
                    <RightMenu />
                  </div>
                  <Button
                    className={style.barsMenu}
                    type="primary"
                    onClick={this.showDrawer}
                  >
                    <span className={style.barsBtn} />
                  </Button>
                  <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                  >
                    <LeftMenu />
                    <RightMenu />
                  </Drawer>
                </div>
              </nav>
            </div>
          )
        }}
      />
    )
  }
}

export default Navbar
const LayoutStaticQuery = graphql`
  query LayoutImages {
    brand_logo_orange: file(absolutePath: { regex: "/brand_caerus_orange/" }) {
      childImageSharp {
        fixed(width: 66, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    brand_logo_white: file(absolutePath: { regex: "/brand_logo_white/" }) {
      childImageSharp {
        fixed(width: 66, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
