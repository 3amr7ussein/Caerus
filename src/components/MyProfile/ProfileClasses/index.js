import React, { Component } from "react"
import style from "./style.module.scss"
import { Col, Row } from "antd"
import ClassesMenu from "./ClassesMenu"
import UpcomingClasses from "./Upcoming"

class ProfileClasses extends Component {
  state = {
    ActiveTab: 1,
  }

  callbackFunction = childData => {
    this.setState({ ActiveTab: childData })
  }

  render() {
    console.log(this.props.userClasses)
    let show
    if (this.state.ActiveTab === 1) {
      show = <UpcomingClasses upcoming={this.props.userClasses} />
    } else if (this.state.ActiveTab === 2) {
      show = <div>Past</div>
    }

    return (
      <div>
        <Row>
          <Col span={4}>
            {" "}
            <ClassesMenu parentCallback={this.callbackFunction} />
          </Col>
          <Col span={1} />
          <Col span={19}>{show}</Col>
        </Row>
      </div>
    )
  }
}

export default ProfileClasses
