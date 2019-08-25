import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse ,Row , Col} from 'antd';
import im from '../../../../static/Images/about.jpg';



 

class Summary extends Component{

//     state = {
//         namee = "Fluid Yoga AR",
//         datee = "Wednesday, 14 April 2019",
//         timee = "14:00"
// }

    render(){
        return(
          
                 <div >
                  <h5>Order Summary</h5>
                    <div className = {style.orderSummary}>
                        <img src = {im} />
                            <ul className = {style.list}>
                                <h6>Class Name</h6>
                                <h4>Fluid Yoha AR</h4>
                                <Row>
                                <Col span={18}><h6>Date</h6></Col>
                                <Col span ={6} className={style.textRight}><h6>Time</h6></Col>
                                <Col span={18}><li>Wednesday, 14 April 2019</li></Col>
                                <Col span ={6} className={style.textRight}><li>14:00</li></Col>
                                </Row>
                                <h6>Instructor</h6>
                                <li>Shahira El Maghallawy</li>
                                <h6>Studio</h6>
                                <li>Spin Away Studio - Nasr City</li>
                                <div className= {style.line}></div>
                                <Row>
                                <Col span = {18}>Class Price</Col>
                                <Col span = {6}><li>60 EGP</li></Col>
                                <Col span = {18}>Number of Users</Col>
                                <Col span = {6} ><li>3x</li></Col>
                                </Row>
                                <div className= {style.line}></div>
                                <Row>
                                    <Col span = {18}><h5>Subtotal</h5></Col>
                                    <Col span = {6} ><li>180 EGP </li></Col>
                                    <Col span = {8}>Promo Code</Col>
                                    <Col span = {1}></Col>
                                    <Col span = {5} className = {style.discount}>-10%</Col>
                                    <Col span = {4}></Col>
                                    <Col span = {6}><li>-18 EGP </li> </Col>
                                </Row>
                                <div className= {style.line}></div>
                                <Row>
                                    <Col span = {8}><h5>Total</h5></Col>
                                    <Col span = {10}></Col>
                                    <Col span = {6}><li>162 EGPx`</li></Col>
                                </Row>
                            </ul>
                    </div>
            </div>
        )
    }
}


export default Summary;