import React, { Component } from "react"

import { Col, Row } from "antd"
import FavoriteMenu from "./FavoriteMenu"
import UpcomingClasses from "./Upcoming"

class ProfileFavorites extends Component {
  state = {
    ActiveTab: 1,
  }

  callbackFunction = childData => {
    this.setState({ ActiveTab: childData })
  }

  render() {
    console.log("classes", this.props.classes)
    let show
    if (this.state.ActiveTab === 1) {
      show = <UpcomingClasses userClasses={this.props.classes} />
    } else if (this.state.ActiveTab === 2) {
      show = <div>Studios</div>
    }

    return (
      <div>
        <Row>
          <Col lg={4} xs={3}>
            {" "}
            <FavoriteMenu parentCallback={this.callbackFunction} />
          </Col>
          <Col lg={1} xs={0} />
          <Col lg={19} xs={21}>{show}</Col>
        </Row>
      </div>
    )
  }
}

export default ProfileFavorites
