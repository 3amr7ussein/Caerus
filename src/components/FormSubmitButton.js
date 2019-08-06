// @flow
import React, { Component } from "react"

import { Spin } from "antd"

import { Colors } from "../Themes"

import styles from "./Styles/FormSubmitButtonStyle"
import brandedButton from "./brandedButton/BrandedButton"

export default class FormSubmitButton extends Component {
  render() {
    const {
      action,
      content,
      handleSubmit,
      submitting,
      clear,
      disabled,
      style,
    } = this.props
    return (
      <brandedButton
        style={style}
        clear={clear}
        disabled={disabled}
        onPress={handleSubmit ? handleSubmit(action) : null}
      >
        {submitting ? (
          <Spin
            size={"small"}
            style={clear ? styles.clearSpinner : {}}
            color={Colors.whiteBackground}
          />
        ) : (
          content
        )}
      </brandedButton>
    )
  }
}
