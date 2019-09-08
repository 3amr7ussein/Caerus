import React, { Component } from "react"
import Header from "../Header/Header"
import { Link } from "gatsby"
// import { Tabs } from "antd"
import { Menu } from "antd"
import style from "./style.module.scss"
import ProfileClasses from "../MyProfile/ProfileClasses"
// import ProfilePayment from "./ProfilePayment"
// import ProfileClasses from "./ProfileClasses"

// const { TabPane } = Tabs

// function callback(key) {
//   console.log(key)
// }

class MyProfile extends Component {
  render() {
    console.log("ProfileData", this.props.myData)

    return (
      <div className={style.discoverWrapper}>
        {/* <Header userInfo={this.props.myData} /> */}
        <ProfileClasses />
      </div>
    )
  }
}

export default MyProfile
