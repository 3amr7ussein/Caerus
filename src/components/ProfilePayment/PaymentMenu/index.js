import React, { Component } from "react"
import style from "./style.module.scss"
import { Collapse, Col, Row } from "antd"
import { Link } from "gatsby"

class PaymentMenu extends Component {
  state = {
    active: 1,
  }

  handleClick = activeTab => {
    this.setState({ active: activeTab })
    this.props.parentCallback(activeTab)
  }

  render() {
    var inActiveItemStyle = {
      color: "#ccc",
      fontWeight: "bold",
    }

    var activeItemStyle = {
      color: "black",
      fontWeight: "bold",
    }

    return (
      <div>
        <ul className={style.payList}>
          {/* when user click on list item it change the # of active list item inside state */}
          {/* styling is according to the active list item from state.active */}
          <li
            style={
              this.state.active === 1 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(1)
            }}
          >
            <i /> My Cards
          </li>

          <li
            style={
              this.state.active === 2 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(2)
            }}
          >
            <i /> Wallet{" "}
          </li>

          <li
            style={
              this.state.active === 3 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(3)
            }}
          >
            <i /> Promo Codes{" "}
          </li>
        </ul>
      </div>
    )
  }
}

export default PaymentMenu
