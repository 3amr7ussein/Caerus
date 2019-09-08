import React, { Component } from "react"
import { Layout, Menu } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"
import ProfilePic from "../../../static/Images/img_avatarWoman.png"
import EditPin from "../../../static/Images/EditPen1.png"
import Lock from "../../../static/Images/Lock-icon.png"
import FirebaseImage from "../FirebaseTmage"
import { Link } from "gatsby"

// const { Content } = Layout

class Header extends Component {
  render() {
    console.log("USER", this.props.userInfo)
    return (
      <div className={style.dadContainer}>
        <section className={style.sectionStyle}>
          <div className={style.imgContainer}>
            <FirebaseImage fbref={this.props.userInfo.avatar} />
          </div>
          <div className={style.infoContainer}>
            <h3>{this.props.userInfo.name}</h3>
            <p>{this.props.userInfo.email}</p>

            <div />
          </div>
        </section>
        <div className={style.menuContainer}>
          <Menu mode="horizontal">
            <Menu.Item key="_01">
              <Link to="myBooking">My Classes</Link>
            </Menu.Item>
            <Menu.Item key="_02">
              <Link to="myFav">Favorites</Link>
            </Menu.Item>
            <Menu.Item key="_03">
              <Link to="mypayments">Payments</Link>
            </Menu.Item>
            <Menu.Item key="_04">
              <Link to="editprofile">Edit Profile</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Header
