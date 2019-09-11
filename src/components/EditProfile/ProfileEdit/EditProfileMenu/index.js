import React, { Component } from "react"
import style from "./style.module.scss"
import ic_passwordActive from "../../../../../static/Images/ic_passwordActive.png"
import ic_password from "../../../../../static/Images/ic_password.png"
import ic_generalActive from "../../../../../static/Images/ic_generalActive.png"
import ic_general from "../../../../../static/Images/ic_general.png"

class FavoriteMenu extends Component {
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
            <div style={{ marginRight: 12, display: "inline" }}>
              {this.state.active === 1 ? (
                <img src={ic_generalActive} />
              ) : (
                <img src={ic_general} />
              )}
            </div>
            General
          </li>

          <li
            style={
              this.state.active === 2 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(2)
            }}
          >
            <div style={{ marginRight: 12, display: "inline" }}>
              {" "}
              {this.state.active === 1 ? (
                <img src={ic_password} />
              ) : (
                <img src={ic_passwordActive} />
              )}
            </div>
            ChangePassword
          </li>
        </ul>
      </div>
    )
  }
}

export default FavoriteMenu
