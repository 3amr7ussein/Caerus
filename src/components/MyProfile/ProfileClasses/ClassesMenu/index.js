import React, { Component } from "react"
import style from "./style.module.scss"
import ic_upcomingClassesActive from "../../../../../static/Images/ic_upcomingClassesActive.png"
import ic_upcomingClasses from "../../../../../static/Images/ic_upcomingClasses.png"
import ic_pastClassesActive from "../../../../../static/Images/ic_pastClassesActive.png"
import ic_pastClasses from "../../../../../static/Images/ic_pastClasses.png"
import {Row , Col} from 'antd';
const criticalWid = 980;
class PaymentMenu extends Component {
  state = {
    active: 1,
    cirtical:700
  }

  handleClick = activeTab => {
    this.setState({ active: activeTab })
    this.props.parentCallback(activeTab)
  }
   
  
  render() {
    this.state.cirtical = window.innerWidth;
    var inActiveItemStyle = {
      color: "#ccc",
      fontWeight: "bold",
    }

    var activeItemStyle = {
      color: "black",
      fontWeight: "bold",
    }
    console.log('CRITICAL' , this.state.cirtical);
    return (
      <div>
        <ul className={style.payList}>
          {/* when user click on list item it change the # of active list item inside state */}
          {/* styling is according to the active list item from state.active */}
         <Row>
         <Col span = {24}>
   
                  <li
            style={
              this.state.active === 1 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(1)
            }}
          >
            <div style={{ marginRight: 12, display: "inline" }}>
              {this.state.active === 1 ? (
                <img src={ic_upcomingClassesActive} />
              ) : (
                <img src={ic_upcomingClasses} />
              )}
            </div>
            {this.state.cirtical >criticalWid ? <>Upcoming</>:<></>}

            
          </li>
          </Col>

          <Col span = {24}>

          <li
            style={
              this.state.active === 2 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(2)
            }}
          >
            <div style={{ marginRight: 12, display: "inline" }}>
              {" "}
              {this.state.active === 1 ? (
                <img src={ic_pastClasses} />
              ) : (
                <img src={ic_pastClassesActive} />
              )}
            </div>
            {this.state.cirtical >criticalWid ? <>Past</>:<></>}

          </li>
          </Col>
          </Row>
        </ul>
      </div>
    )
  }
}

export default PaymentMenu
