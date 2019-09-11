import React, { Component } from "react"
import { Col, Row, Divider, Input } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../../../brandedButton/BrandedButton"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import {
  required,
  email,
  minLength11,
  number,
  englishOnly,
  mustBeKnownGender,
} from "../../../../Services/Validators"
import { getLocalFile } from "../../../../Services/FileService"
import { formUpdateProfile } from "../../../../Redux/FormActions"

const renderField = ({
  input,
  label,
  type,
  addonBefore,
  htmlType,
  meta: { touched, error },
}) => (
  <div>
    <div>
      <Input
        {...input}
        type={htmlType}
        size="large"
        placeholder={label}
        addonBefore={addonBefore}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)
class GeneralInfo extends Component {
  componentWillMount() {
    this.props.reset()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className={style.myCards}>
        <h4 style={{ marginBottom: 30 }}>Edit your Personal Information</h4>
        <Divider />
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
          </div>
          <div>
            <div className={style.inputPW}>
              <p>Email Address</p>
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
            <div className={style.inputPW}>
              <p>Mobile Number</p>
              <Field
                addonBefore="+2"
                name="phone"
                type="number"
                htmlType="number"
                component={renderField}
                label="Mobile Number"
                validate={[required, minLength11, number]}
                size="large"
              />
            </div>
            <div className={style.inputN}>
              <label>Gender</label>
              <div>
                <Field
                  name="gender"
                  component="select"
                  label="Gender"
                  size="large"
                  validate={[required, mustBeKnownGender]}
                >
                  <option />
                  <option>Male</option>
                  <option>Female</option>
                </Field>
              </div>
            </div>
            {/* <div className={style.inputPW}>
                <p>Gender</p>
                <Field
                  name={"gender"}
                  type="text"
                  component="select"
                  label="Gender"
                  htmlType="text"
                  options={[
                    { label: "Female", key: "GENDER_FEMALE" },
                    { label: "Male", key: "GENDER_MALE" },
                  ]}
                  size="large"
                  validate={[required, mustBeKnownGender]}
                />
              </div> */}
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <BrandedButton
              content="Save"
              handleClick={handleSubmit(formUpdateProfile)}
            />
          </div> */}
        </div>
      </div>
    )
  }
}

const getInitialValues = currContact => {
  if (currContact) {
    const {
      name,
      bio,
      email,
      phone: { number },
      avatar,
      gender,
    } = currContact
    return {
      name,
      bio,
      phone: number,
      email: email,
      gender: gender,
      // image: { uri: `file://${getLocalFile(avatar)}` },
    }
  }
  return { name: "", bio: "", phone: "" }
}
function mapStateToProps(state) {
  return {
    initialValues: getInitialValues(state.user.user),
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "ProfileForm",
  })(GeneralInfo)
)
