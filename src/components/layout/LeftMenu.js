import React, { Component } from "react"
import { Link } from "gatsby"
import { Menu, Icon } from "antd"
import style from './style.module.scss';
class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="_01">
          <Link className = {style.Link} to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="_02">
          <Link to="" className = {style.Link}>About us</Link>
        </Menu.Item>
        <Menu.Item key="_03">
          <Link to="" className = {style.Link}>Contact us</Link>
        </Menu.Item>
        <Menu.Item key="_04">
          <Link to="" className = {style.Link}>Download</Link>
        </Menu.Item>
        <Menu.Item key="_05">
          <Link to="/q&a" className = {style.Link}>FAQ's</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default LeftMenu
