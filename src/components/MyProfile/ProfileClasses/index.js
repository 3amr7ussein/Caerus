import React, { Component } from "react"
import style from "./style.module.scss"
import { Col, Row } from "antd"
import ClassesMenu from "./ClassesMenu"
import UpcomingClasses from "./Upcoming"
import Past from './Past/index';
class ProfileClasses extends Component {
  state = {
    ActiveTab: 1,
  }

  callbackFunction = childData => {
    this.setState({ ActiveTab: childData })
  }

  render() {
    const AllClasses = this.props.classes;
    const upcome = AllClasses.filter(function(item){
      return Date <= Date(item.startAt);
    })
    const pastClasses = AllClasses.filter(function(item){
      return Date >= Date(item.startAt);
    })
    
    // console.log("classesOK", this.props.classes)
    let show
    if (this.state.ActiveTab === 1) {
      show = <UpcomingClasses userClasses={upcome} />
    } else if (this.state.ActiveTab === 2) {
      show = <Past  userClasses={pastClasses}/>
    }

    return (
      <div>
        <Row className = {style.discoverWrapper}>
          <Col md={4} xs = {24}>
            {" "}
            <ClassesMenu parentCallback={this.callbackFunction} />
          </Col>
          <Col md={1} xs = {0}/>
          <Col md={19} xs = {24}>{show}</Col>
        </Row>
      </div>
    )
  }
}

export default ProfileClasses
