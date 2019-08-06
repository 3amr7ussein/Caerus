import React, { Component } from "react"

import { Button } from "antd"
import style from "./style.module.scss"

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  _renderDecrement() {
    const newState = this.state.count - 1
    if (newState >= 1) {
      this.setState({ count: newState })
      this.props.onChange && this.props.onChange(newState)
    }
  }

  _renderIncrement() {
    const newState = this.state.count + 1
    this.setState({ count: newState })
    this.props.onChange && this.props.onChange(newState)
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.counter}>
          <Button
            style={style.buttonUp}
            onClick={() => this._renderDecrement()}
            disabled={this.state.count <= 1}
          >
            <span style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              -
            </span>
          </Button>
          <div style={style.numView}>
            <span
            // style={style.num}
            >
              {this.state.count}
            </span>
          </div>

          <Button
            // style={style.buttonUp}
            onClick={() => this._renderIncrement()}
          >
            <span style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              +
            </span>
          </Button>
        </div>
      </div>
    )
  }
}
