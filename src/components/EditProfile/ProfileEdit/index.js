import React, { Component } from "react"

import { Col, Row } from "antd"
import EditProfileMenu from "./EditProfileMenu"
import GeneralInfo from "./GeneralInfo"
import ChangePW from "./ChangePW"

class ProfileEdit extends Component {
  state = {
    ActiveTab: 1,
  }

  callbackFunction = childData => {
    this.setState({ ActiveTab: childData })
  }

  render() {
    console.log("userInfo", this.props.userInfo)
    let show
    if (this.state.ActiveTab === 1) {
      show = <GeneralInfo userInfo={this.props.userInfo} />
    } else if (this.state.ActiveTab === 2) {
      show = <ChangePW />
    }

    return (
      <div>
        <Row>
          <Col span={4}>
            {" "}
            <EditProfileMenu parentCallback={this.callbackFunction} />
          </Col>
          <Col span={1} />
          <Col span={19}>{show}</Col>
        </Row>
      </div>
    )
  }
}

export default ProfileEdit
