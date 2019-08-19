import React, { Component } from "react"
import { Modal, Button, Divider, Input, Checkbox } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../../brandedButton/BrandedButton"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import FacebookLogin from "react-facebook-login"

import { formLogin } from "../../../Redux/FormActions"

const required = value =>
  value || typeof value === "number" ? undefined : "Required"
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined

const renderField = ({
  input,
  label,
  type,
  htmlType,
  meta: { touched, error },
}) => (
  <div>
    <div>
      <Input {...input} type={htmlType} size="large" placeholder={label} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

class Login extends Component {
  componentWillMount() {
    this.props.reset()
  }

  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`)
    }
    const responseFacebook = response => {
      console.log(response)
    }

    const { handleSubmit, submitting } = this.props // handleSubmit is provided by reduxForm
    return (
      <div>
        <Modal
          className={style.modal}
          title="Login to your account"
          centered
          visible={this.props.Visibility || false}
          onCancel={this.props.onCancel}
        >
          <FacebookLogin
            appId="353050132290200"
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
            buttonStyle={{
              width: "100%",
              padding: 10,
              textTransform: "none",
              fontSize: 12,
              fontWeight: "normal",
              borderRadius: 8,
              background: " #2D70BE",
              color: "white",
              border: 0,
              textAlign: "center",
              display: "inline-block",
            }}
            textButton="Continue with Facebook"
          />

          <Divider>or</Divider>
          <div className={style.input}>
            <p>Email Address or Mobile Number</p>
            <Field
              name="email"
              type="email"
              htmlType="email"
              component={renderField}
              label="Email"
              validate={email}
              size="large"
            />
          </div>
          <div className={style.input}>
            <p>Password </p>
            <Field
              name="password"
              type="password"
              htmlType="password"
              component={renderField}
              label="Password"
              validate={[required, maxLength15, minLength2]}
              size="large"
            />
          </div>
          <Checkbox onChange={onChange}>Remember me</Checkbox>
          <div className={style.logButton}>
            <BrandedButton
              content="Login"
              styles={{ width: "100%" }}
              htmlType="submit"
              handleClick={handleSubmit(formLogin)}
              disabled={submitting}
            />
          </div>
          <p className={style.register}>
            Don’t have an account?
            <a
              href="#"
              onClick={() => this.props.onRegister && this.props.onRegister()}
            >
              Register
            </a>
          </p>
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
)(
  reduxForm({
    form: "LoginForm",
  })(Login)
)
