import React, { Component } from "react"
import { Spin, Button } from "antd"
import FacebookLoginActions from "../../Redux/FacebookLoginRedux"
import style from "./style.module.scss"
import { connect } from "react-redux"

class LoginWithFacebookButton extends Component {
  componentDidMount() {
    this.props.requestReset()
  }
  al
  componentWillReceiveProps(nextProps) {
    if (this.props.facebookLogin.fetching && nextProps.facebookLogin.error) {
      alert(
        "Oops! something went wrong",
        "please try again or try manual sign up",
        [
          {
            text: "Manual Sign up",
            onPress: () =>
              this.props.onLoginFailed && this.props.onLoginFailed(),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]
      )
      return
    }

    if (
      this.props.facebookLogin.fetching &&
      !nextProps.facebookLogin.fetching &&
      nextProps.facebookLogin.error === null &&
      nextProps.facebookLogin.payload
    ) {
      this.props.onLoginSuccess && this.props.onLoginSuccess()
    }
  }

  _onPressButton() {
    this.props.requestLogin()
  }

  render() {
    return (
      <Button
        disabled={this.props.facebookLogin.fetching}
        onPress={() => this._onPressButton()}
        style={{ display: "flex", flex: 1, width: "100%" }}
      >
        {!this.props.facebookLogin.fetching ? (
          <span style={style.buttonText}>Continue with Facebook</span>
        ) : (
          <Spin size={"small"} style={{ height: 48 }} color="white" />
        )}
      </Button>
    )
  }
}

const mapStateToProps = state => ({
  facebookLogin: state.facebookLogin,
})
const mapDispatchToProps = dispatch => ({
  requestLogin: () => dispatch(FacebookLoginActions.facebookLoginRequest({})),
  requestReset: () => dispatch(FacebookLoginActions.facebookLoginFailure()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithFacebookButton)
