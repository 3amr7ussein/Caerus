import React, { Component } from "react"
import { Link } from "gatsby"
import { Menu, Icon } from "antd"

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="_01">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="_02">
          <Link to="">About us</Link>
        </Menu.Item>
        <Menu.Item key="_03">
          <Link to="">Contact us</Link>
        </Menu.Item>
        <Menu.Item key="_04">
          <Link to="">Download</Link>
        </Menu.Item>
        <Menu.Item key="_05">
          <Link to="/q&a">Help</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default LeftMenu
