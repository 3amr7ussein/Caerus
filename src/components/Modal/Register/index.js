import React, { Component } from "react"
import { Modal, Button, Divider, Input, Checkbox } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../../brandedButton/BrandedButton"
import { connect } from "react-redux"
import LoginActions from "../../../Redux/LoginRedux"
import { Field, reduxForm } from "redux-form"
import {
  required,
  email,
  minLength11,
  number,
  englishOnly,
  maxLength15,
  minLength2,
} from "../../../Services/Validators"
import { formRegister } from "../../../Redux/FormActions"

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

class Register extends Component {
  componentWillMount() {
    this.props.reset()
  }

  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`)
    }
    const { handleSubmit, submitting } = this.props
    return (
      <div>
        <Modal
          className={style.modal}
          title="Creat a new account"
          centered
          visible={this.props.Visibility || false}
          onCancel={this.props.onCancel}
        >
          <Button className={style.fbButton} block>
            Continue with Facebook
          </Button>
          <Divider>or</Divider>

          <div className={style.inputN}>
            <div style={{ marginRight: 12 }}>
              <div className={style.input}>
                <p>First Name</p>
                <Field
                  name="firstname"
                  type="text"
                  htmlType="text"
                  component={renderField}
                  label="First Name"
                  validate={[required, englishOnly]}
                  size="large"
                />
              </div>
              <div>
                <div className={style.input}>
                  <p>Last Name</p>
                  <Field
                    name="lasttname"
                    type="text"
                    htmlType="text"
                    component={renderField}
                    label="Last Name"
                    validate={[required, englishOnly]}
                    size="large"
                  />
                </div>
                <div className={style.inputPW}>
                  <p>Mobile Number</p>
                  <Field
                    name="phone"
                    type="number"
                    htmlType="number"
                    component={renderField}
                    label="Mobile Number"
                    validate={[required, minLength11, number]}
                    size="large"
                  />
                </div>
                <div className={style.inputPW}>
                  <p>Email Address</p>
                  <Field
                    name="email"
                    type="email"
                    htmlType="email"
                    component={renderField}
                    placeholder="E.g. john.doe@example.com"
                    label="Email"
                    validate={email}
                    size="large"
                  />
                </div>
                <div className={style.inputPW}>
                  <p>Password </p>
                  <Field
                    name="password"
                    type="password"
                    htmlType="password"
                    component={renderField}
                    placeholder="************"
                    label="Password"
                    // validate={[required, maxLength15, minLength2]}
                    size="large"
                  />
                </div>
                <div className={style.inputPW}>
                  <p>Confirm Password </p>
                  <Field
                    name="confirmpassword"
                    type="password"
                    htmlType="password"
                    component={renderField}
                    placeholder="************"
                    label="Password"
                    // validate={[required, maxLength15, minLength2]}
                    size="large"
                  />
                </div>
                <div>
                  <Checkbox onChange={onChange}>
                    Get emails with news, promos and updates on the latest
                    events and deals.
                  </Checkbox>
                </div>

                <Checkbox onChange={onChange}>
                  I agree to Caerus <a href="/">terms of service</a> and{" "}
                  <a href="/">privacy policy.</a>
                </Checkbox>
                <div className={style.logButton}>
                  <BrandedButton
                    content="Register"
                    styles={{ width: "100%" }}
                    htmlType="submit"
                    handleClick={handleSubmit(formRegister)}
                    disabled={submitting}
                  />
                </div>
                <p className={style.register}>
                  Don’t have an account?{" "}
                  <a
                    href="#"
                    onClick={() => this.props.onLogin && this.props.onLogin()}
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    fetching: state.login.fetching,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (email, password) =>
      dispatch(LoginActions.loginRequest(email, password)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "RegisterForm",
  })(Register)
)
