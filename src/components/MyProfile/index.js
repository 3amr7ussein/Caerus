import React, { Component } from "react"
import Header from "../Header/Header"
import { Link } from "gatsby"
// import { Tabs } from "antd"
import { Menu } from "antd"
import style from "./style.module.scss"
// import ProfilePayment from "./ProfilePayment"
// import ProfileClasses from "./ProfileClasses"

// const { TabPane } = Tabs

// function callback(key) {
//   console.log(key)
// }

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


        {/* <Tabs
          defaultActiveKey="1"
          onChange={callback}
          // style={{ justifyContent: "center", margin: "0 auto" }}
        >
          <TabPane onTabClick={() => console.log('hey')} tab="My Classes" key="1">
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
        </Tabs> */}


      {/* <Menu mode="horizontal">
          <Menu.Item key="_01">
            <Link to="/myBooking">My Classes</Link>
          </Menu.Item>
          <Menu.Item key="_02">
            <Link to="">Favorites</Link>
          </Menu.Item>
          <Menu.Item key="_03">
            <Link to="/myProfile/payments">Payments</Link>
          </Menu.Item>
          <Menu.Item key="_04">
            <Link to="">Edit Profile</Link>
          </Menu.Item>
      </Menu> */}

      </div>

    )
  }
}

export default MyProfile;
