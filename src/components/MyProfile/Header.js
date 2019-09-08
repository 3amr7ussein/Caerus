import React, { Component } from "react"
import { Layout, Menu } from "antd"
import { Link } from "gatsby"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"
import ProfilePic from "../../../static/Images/img_avatarWoman.png"
import EditPin from "../../../static/Images/EditPen1.png"
import Lock from "../../../static/Images/Lock-icon.png"
import FirebaseImage from "../FirebaseTmage"

const { Content } = Layout

class Header extends Component {
  state = {
    current: "one",
  }

  handleClick = e => {
    console.log("click ", e)
    this.setState({
      current: e.key,
    })
  }
  render() {
    console.log("USER", this.props.userInfo)
    return (
      <section className={style.sectionStyle}>
        <div className={style.imgContainer}>
          <FirebaseImage fbref={this.props.userInfo.avatar} />
        </div>
        <div className={style.infoContainer}>
          <h3>{this.props.userInfo.name}</h3>
          <p>{this.props.userInfo.email}</p>
          <div />
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="one">
                <Link to="/Explore" /> Home
              </Menu.Item>
              <Menu.Item key="two">Navigation two</Menu.Item>
              <Menu.Item key="three">Navigation three</Menu.Item>
            </Menu>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
