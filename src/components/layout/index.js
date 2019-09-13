import React from "react"
import { Layout as AntLayout, Menu } from "antd"
import { connect } from "react-redux"
import Firebase, { getFirebase } from "../../../static/Firebase/index.js"

import styled from "styled-components"
import BrandedButton from "../brandedButton/BrandedButton"
import { FontContainer } from "../../../config/typography"
import style from "./style.module.scss"
import SiteFooter from "./footer"

import Navbar from "./Navbar.js"

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      isScrolled: false,
    }
  }
  componentDidMount() {
    const app = import("firebase/app")
    const auth = import("firebase/auth")
    const database = import("firebase/database")

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      firebase.auth().signInAnonymously()
    })
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 64
      if (isTop !== true) {
        this.setState({ isScrolled: true })
      } else {
        this.setState({ isScrolled: false })
      }
    })
  }

  render() {
    const { children } = this.props;
    
    return (
      <div
        className={style.layout}
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          
        }}
      >
        <FontContainer />
        <StyledWrapper className={this.state.isScrolled ? style.scrolled : style.nav}>
          <Menu  className={style.menuBar} >
            <div  className = {style.discoverWrapper}   > */}
            <Navbar />
            </div>
          </Menu>
        </StyledWrapper>
        <main>{children}</main>
        <SiteFooter />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

const StyledWrapper = styled.section`
  .ant-layout-header {
    height: 80px;
    padding: 0px;
  }

  @media (max-width: 425px) {
    .ant-layout-header {
      height: 80px;
    }
  }
  .ant-menu {
    background-color: transparent;
  }
  .ant-dropdown {
    top: 80px;
  }
  .brandLogo {
    height: 48px;
    margin-bottom: 0px;
  }
  .ant-menu-horizontal {
    border-bottom: none;
    background-color: transparent;
    // background-color: #ff4200;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
    // border-bottom: 2px solid white;
  }
  .ant-menu-item > a {
    color: white;
  }
  .ant-menu-horizontal > .ant-menu-item > a {
    color: white;
    border-bottom: 2px solid #fff;
  }
  .ant-menu-horizontal > .ant-menu-item > a:hover {
    color: white;
  }
  .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom: 2px solid #fff;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999999;
`
