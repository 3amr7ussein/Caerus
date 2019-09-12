import React, { Component } from "react"
import { Col, Row, Divider, Input } from "antd"

import { Select,DatePicker } from "antd"
import style from "./style.module.scss"
import BrandedButton from "../../../brandedButton/BrandedButton"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import Moment from 'react-moment';

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
import PP from '../../../../../static/Images/profile-pic.jpg'

const { Option } = Select

function onChange(date, dateString) {
  console.log(date, dateString);
}
const renderDatePicker = ({
  input,
  placeholder, 
  defaultValue, 
  meta: {touched, error} }) => (
  <div>
        <DatePicker style = {{width:'100%', height:"40px"}} {...input} dateForm="MM/DD/YYYY" selected={input.value ? Moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);
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
        style = {{height:'40px'}}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)
const renderSelect = ({
  input,
  label,
  type,
  addonBefore,
  htmlType,
  options,
  meta: { touched, error },
}) => (
  <div>
    <div>
      <Select {...input} style={{ width: '100%' , height:'40px'}}>
        {options.map(op => (
          <Option value={op.key}>{op.label}</Option>
        ))}
      </Select>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const handleRemovePP = function(){};        //function that handle click on remove profile picture

class GeneralInfo extends Component {
 
  componentWillMount() {
    this.props.reset()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(formUpdateProfile)}>
        <div className={style.myCards}>
          
          <h4 style={{ marginBottom: 30 }}>Edit your Personal Information</h4>
          <div className = {style.container }>
          
          <div className = {style.pP}>
          <div className = {style.removePP}>
            <div onClick = {handleRemovePP}  style={{height:20 ,textAlign:'center', position:'relative', left : '300%' , top:20,cursor:'pointer', width : 20 , borderRadius : '50%' , background:'red' ,color:'white' , margin :0 , padding :0}}>x</div>
          </div>
            <img src= {PP} >
               
          </img>
            <h2>Change Profile Picture</h2>
          </div>
                    <Divider />
                    <Row>
          <div className={style.input}>
          
          <Col span = {24}>
            <div >
              <div className={style.input}>
                <p>Name</p>
                <Field
                  name="name"
                  type="text"
                  htmlType="text"
                  component={renderField}
                  label="Name"
                  validate={[required, englishOnly]}
                  size="large"
                />
              </div>
            </div>
            </Col>
            
            
            <Col md={11} sm={24}>
              <div className={style.input}>
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
              </Col>
              <Col span={2}></Col>
             <Col md={11} xs={24}>
              <div className={style.input}>
                <p>Phone Number</p>
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
              </Col>
              <Col md={11} xs={24}>
              <div className={style.input}>
                <p>Gender</p>
                <Field
                  style={{width:'100%' , height : '40px'}}
                  name={"gender"}
                  type="text"
                  component={renderSelect}
                  label="Gender"
                  htmlType="text"
                  options={[
                    { label: "Female", key: "GENDER_FEMALE" },
                    { label: "Male", key: "GENDER_MALE" },
                  ]}
                  size="large"
                  validate={[required, mustBeKnownGender]}
                />
              </div>
              </Col>
              <Col span={2}></Col>

              <Col md={11} xs={24} >
                <div className = {style.input}>
              <p>Date Of Birth</p>
              <Field
                name={"date"}
                component = {renderDatePicker}
                label = "date"
                size = "large"

              />
                </div>
              </Col>
              
            <div style={{ textAlign: "center" }}>
              <BrandedButton
              styles = {{maxHeight:32 ,  maxWidth : 150 , margin:"30px auto" , fontSize: 18}}
                content="Save"
                handleClick={handleSubmit(formUpdateProfile)}
              />
            </div>
            
          </div>
          </Row>
        </div>
        
        </div>
        
      </form>
    )
  }
}

const getInitialValues = currContact => {
  if (currContact) {
    const { name, bio, email, phone, avatar, gender } = currContact

    return {
      name,
      bio,
      phone: phone && phone.number ? phone.number : 0,
      email: email,
      gender: gender,
      // image: { uri: `file://${getLocalFile(avatar)}` },
    }
  }
  return { name: "", bio: "", phone: "" }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    initialValues:
      !!(state.user && state.user.user) && getInitialValues(state.user.user),
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
