import React, { Component } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Menu, Button, Dropdown, Icon } from "antd"
// import { FirebaseHelper } from "../../../static/Firebase"
import Login from "../Modal/Login"
import Register from "../Modal/Register"
import FirebaseImage from "../FirebaseTmage/index.js"

const menu =  <Menu>
    <Menu.Item key="0">
      <Link to="/myProfile/">My Profile</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/myBooking">My Booking</Link>
    </Menu.Item>

    <Menu.Item key="3">
      <Link to="/myFav">My Favorite</Link>
    </Menu.Item>
  </Menu>


class RightMenu extends Component {
  state = {
    showLoginModalSection: false,
    showRegisterModalSection: false,
  }

  showLoginModal(showLoginModalSection) {
    this.setState({
      showLoginModalSection,
    })
  }
  showRegisterModal(showRegisterModalSection) {
    this.setState({
      showRegisterModalSection,
    })
  }

  render() {
    // console.log("Home", this.props.user)
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="_01">
            <Link to="">List your business</Link>
          </Menu.Item>
          <Menu.Item key="_02">
            {this.props.user.isAuthenticated ? (
              <div>
                <FirebaseImage
                  fbref={this.props.user.user.avatar}
                  style={{
                    width: 40,
                    height: 40,
                    marginBottom: 0,
                    borderRadius: "50%",
                    marginRight: 8,
                  }}
                />
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  className={"dropDown"}
                >
                  <a
                    className="ant-dropdown-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Hello, {this.props.user.user.name} <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            ) : (
              <Button
                ghost
                type="link"
                onClick={() => this.showLoginModal(true)}
              >
                Login
              </Button>
            )}
          </Menu.Item>
          {!this.props.user.isAuthenticated && (
            <Menu.Item key="_03">
              <Button ghost onClick={() => this.showRegisterModal(true)}>
                Register
              </Button>
            </Menu.Item>
          )}
        </Menu>

        <Login
          Visibility={this.state.showLoginModalSection}
          onCancel={() => this.setState({ showLoginModalSection: false })}
          onSubmitSuccess={() => {
            this.setState({ showLoginModalSection: false })
          }}
          onRegister={() =>
            this.setState({
              showRegisterModalSection: true,
              showLoginModalSection: false,
            })
          }
        />
        <Register
          Visibility={this.state.showRegisterModalSection}
          onCancel={() => this.setState({ showRegisterModalSection: false })}
          onSubmitSuccess={() => {
            this.setState({ showRegisterModalSection: false })
          }}
          onLogin={() =>
            this.setState({
              showLoginModalSection: true,
              showRegisterModalSection: false,
            })
          }
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightMenu)
