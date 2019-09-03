import React, { Component } from "react"
import Header from "./Header"
import { Tabs } from "antd"
import style from "./style.module.scss"
import ProfilePayment from "./ProfilePayment"
import ProfileClasses from "./ProfileClasses"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class MyProfile extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    console.log("ProfileData", this.props.myData)

    return (
      <div className={style.discoverWrapper}>
        <Header userInfo={this.props.myData} />
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          // style={{ justifyContent: "center", margin: "0 auto" }}
        >
          <TabPane tab="My Classes" key="1">
            <ProfileClasses userClasses={this.props.myData.classes} />
          </TabPane>
          <TabPane tab="Favorites" key="2">
            Favorites
          </TabPane>
          <TabPane tab="Payment" key="3">
            <ProfilePayment />
          </TabPane>
          <TabPane tab="Edit Profile" key="4">
            Settings
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default MyProfile
