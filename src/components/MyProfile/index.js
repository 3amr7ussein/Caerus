import React, { Component } from "react"

import style from "./style.module.scss"
import ProfileClasses from "../MyProfile/ProfileClasses"

class MyProfile extends Component {
  render() {
    console.log("classes", this.props.classes)

    return (
      <div className={style.discoverWrapper}>
        <ProfileClasses classes={this.props.classes} />
      </div>
    )
  }
}

export default MyProfile