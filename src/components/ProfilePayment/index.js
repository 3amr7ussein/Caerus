import React, { Component } from "react"
import style from "./style.module.scss"
import { Collapse, Col, Row } from "antd"
import PaymentMenu from "./PaymentMenu"
import MyCards from "./MyCards/index"
import Wallet from "./Wallet/index"
import PromoCodes from "./PromoCodes/index"
import { Tabs } from "antd"

const { TabPane } = Tabs

class ProfilePayment extends Component {
  state = {
    ActiveTab: 1,
  }

  callbackFunction = childData => {
    this.setState({ ActiveTab: childData })
  }

  render() {
    let show
    if (this.state.ActiveTab === 1) {
      show = <MyCards />
    } else if (this.state.ActiveTab === 2) {
      show = <Wallet />
    } else if (this.state.ActiveTab === 3) {
      show = <PromoCodes />
    }
    return (
      <div className = {style.discoverWrapper}>
        <Row>
          <Col lg={4} xs={24}>
            {" "}
            <PaymentMenu parentCallback={this.callbackFunction} />
          </Col>
          <Col lg={1} xs={0} />
          <Col lg={19} xs = {24}>
            {/* {this.state.ActiveNum ? <MyCards /> : <div>Hello</div>}  */}
            {/* <MyCards /> */}
            {show}
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProfilePayment
