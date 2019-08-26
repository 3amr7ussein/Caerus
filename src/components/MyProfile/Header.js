import React, { Component } from "react"
import { Layout, Col, Row, Icon } from "antd"
import style from "./style.module.scss"
import StyledHN from "../styled-hn"
import BrandedButton from "../brandedButton/BrandedButton"
import ProfilePic from "../../../static/Images/img_avatarWoman.png"
import EditPin from "../../../static/Images/EditPen1.png"
import Lock from "../../../static/Images/Lock-icon.png"
import FirebaseImage from "../FirebaseTmage"

const { Content } = Layout

class Header extends Component {
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
          <div>
            <BrandedButton
              Icon={
                <Icon
                  type="edit"
                  theme="filled"
                  style={{
                    color: "white",
                  }}
                  className={style.onHover}
                />
              }
              content={"Edit Profile"}
              className={style.BrandedbuttonStyle}
              styles={{
                width: "130px",
                fontSize: "16px",
                height: "30px",
                fontWeight: "500",
              }}
            />

            <BrandedButton
              Icon={
                <Icon
                  type="lock"
                  theme="filled"
                  style={{
                    color: "#ff4200",
                  }}
                />
              }
              content={"Change Password"}
              className={style.ChangePassStyle}
              styles={{
                color: "#ff4200",
                width: "200px",
                fontSize: "16px",
                height: "30px",
                marginLeft: "10px",
                backgroundColor: "white",
                border: "1px solid #ff4200",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Header
