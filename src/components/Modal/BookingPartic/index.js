import React, { Component } from "react"
import { Modal, Button } from "antd"
import style from "./style.module.scss"
import RoundedLink from "../../RoundedLink/RoundedLink"
import { connect } from "react-redux"
import BrandedButton from "../../brandedButton/BrandedButton"

class Login extends Component {
  state = {
    count: 1,
  }
  renderDecrement() {
    const newState = this.state.count - 1
    if (newState >= 1) {
      this.setState({ count: newState })
      this.props.onChange && this.props.onChange(newState)
    }
  }
  renderIncrement() {
    const newState = this.state.count + 1
    this.setState({ count: newState })
    this.props.onChange && this.props.onChange(newState)
  }
  // componentWillMount() {
  //   this.props.reset()
  // }

  startBooking(e) {
    this.participantsModal.setModalVisible(false)
  }
  //   if (this.props.user && this.props.user.isAuthenticated) {
  //     {
  //       this.participantsModal.setModalVisible(false)
  //     }
  //     return this.setState({
  //       partic: this.partic,
  //     })
  //   }
  // }

  render() {
    const { handleSubmit, submitting } = this.props // handleSubmit is provided by reduxForm
    return (
      <div>
        <Modal
          className={style.modal}
          title="Participants"
          centered
          visible={this.props.Visibility || false}
          onCancel={this.props.onCancel}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <Button
                    style={{ display: "flex" }}
                    className={style.buttonDown}
                    onClick={() => this.renderDecrement()}
                    disabled={this.state.count <= 1}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      -
                    </span>
                  </Button>
                </div>
                <div className={style.numView}>
                  <span className={style.num}>{this.state.count}</span>
                </div>
                <div>
                  <Button
                    style={{ display: "flex" }}
                    className={style.buttonDown}
                    onClick={() => this.renderIncrement()}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      +
                    </span>
                  </Button>
                </div>
              </div>

              {/* <Counter
                onChange={count => {
                  this.partic = count
                }}
              /> */}
            </div>
          </div>
          <RoundedLink
            content="Book"
            styles={{ width: "100%" }}
            redirect="/invoice"
            disabled={submitting}
          />
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}
export default connect(
  mapStateToProps,
  null
)(Login)
