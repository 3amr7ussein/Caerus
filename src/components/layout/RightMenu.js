import React, { Component } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Menu, Button } from "antd"
// import { FirebaseHelper } from "../../../static/Firebase"
import Login from "../Modal/Login"
import Register from "../Modal/Register"
import FirebaseImage from "../FirebaseTmage/index.js"
import style from "./style.module.scss"

// const menu =  <Menu>
//     <Menu.Item key="0">
//       <Link to="/myProfile/">My Profile</Link>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <Link to="/myBooking">My Booking</Link>
//     </Menu.Item>

//     <Menu.Item key="3">
//       <Link to="/myFav">My Favorite</Link>
//     </Menu.Item>
//   </Menu>

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
    let hello
    if (this.props.drawer === "0") {
      hello = <>Hello, </>
    } else {
      hello = <></>
    }
    // console.log("Home", this.props.user)
    let show
    if (this.props.drawer === "0") {
      show = (
        <Menu.Item key="_01">
          <Link to="" className={style.Link}>
            List your business
          </Link>
        </Menu.Item>
      )
    } else {
      show = <></>
    }
    return (
      <div>
        <Menu mode={this.props.mode}>
          {show}
          <Menu.Item key="_02">
            {this.props.user.isAuthenticated ? (
              <Link
                to="/myProfile/"
                className={style.Link}
                style={
                  this.props.drawer === 0
                    ? { color: "white" }
                    : { color: "#ff4200" }
                }
              >
                <div style={{ cursor: "pointer", fontWeight: "bold" }}>
                  <FirebaseImage
                    fbref={this.props.user.user.avatar}
                    style={{
                      width: 35,
                      height: 35,
                      marginBottom: 0,
                      borderRadius: "50%",
                      marginRight: 8,
                    }}
                  />
                  {hello}
                  {this.props.user.user.name}{" "}
                </div>
              </Link>
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
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu)
