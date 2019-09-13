import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import LeftMenu from "./LeftMenu"
import RightMenu from "./RightMenu"
import { Drawer, Button, Divider } from "antd"
import style from "./style.module.scss"
import Link from 'gatsby'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      // isScrolled: false,
      current: "mail",
      visible: false,
    }
  }
 
  showDrawer = () => {
    this.setState({ visible: !this.state.visible })
  }

  onClose = () => {
    this.setState({ visible: false })
  }


  render() {
   let   menuBTN 
   if (this.state.visible ===false ) {
     menuBTN =   <Button
   className={style.barsMenu}
   type="primary"
   onClick={this.showDrawer}
 >
   <span className={style.barsBtn} />
   </Button>
   }
   else
   {
     menuBTN=<></>
    }
    return (
      <StaticQuery
        query={LayoutStaticQuery}
        render={data => {
          return (
            <div >
              <nav   >
                <div className={style.logo}>
                  <img
                    alt="/"
                    className={"brandLogo"}
                    src={data.brand_logo_white.childImageSharp.fixed.src}
                  />
                </div>
                <div className={style.menuCon} >
                  <div className={style.leftMenu}>
                    <LeftMenu mode="horizontal" />
                  </div>
                  <div className={style.rightMenu}>
                    <RightMenu drawer = '0' mode="horizontal" />
                  </div>
                  <>{menuBTN}</>
                  <Drawer
                    
                    placement="right"
    
                   closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskClosable= {true}
                  >
                    <div style={{height:20}}></div>
                     <RightMenu drawer = '1'/>
                     <Divider />
                    <LeftMenu />
                   
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
