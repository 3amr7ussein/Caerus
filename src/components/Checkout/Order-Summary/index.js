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
                  <h2>Order Summary</h2>
                    <div className = {style.orderSummary}>
                        <img src = {im} />
                            <ul className = {style.list}>
                                <h6>Class Name</h6>
                                <h4>Fluid Yoha AR</h4>
                                <Row>
                                <Col span = {17}>
                                <div>
                                    <h6>Date</h6>
                                     <li>Wednesday, 14 April 2019</li>
                                    </div>
                                </Col>
                                
                                <Col span = {7}>
                                    <div className={style.textRight}>
                                    <h6>Time</h6>
                                    <li>14:00</li>
                                    </div>
                                 </Col>
                                    
                               
                                </Row>
                                <h6>Instructor</h6>
                                <li>Shahira El Maghallawy</li>
                                <h6>Studio</h6>
                                <li>Spin Away Studio - Nasr City</li>
                                <div className= {style.line}></div>
                                <Row>
                                <Col span = {16}>Class Price</Col>
                                <Col span = {8} className = {style.textRight}><li>60 EGP</li></Col>
                                <Col span = {18} sm={20}>Number of Users</Col>
                                <Col span = {6} sm={4} className = {style.textRight}><li>3x</li></Col>
                                </Row>
                                <div className= {style.line}></div>
                                <Row>
                                    <Col sm = {24} md = {12}><h5>Subtotal</h5></Col>
                                    <Col sm = {24} md = {12} className = {style.textRight} ><li>180 EGP </li></Col>
                                    <Col sm = {15} md = {12} lg={9}>Promo Code</Col>
                                    
                                    <Col  sm = {8} md = {12} lg = {7} className = {style.discount}><i>-10%</i></Col>
                                    
                                    <Col sm = {24} md = {24} lg ={8} className = {style.textRight}><li>-18 EGP </li> </Col>
                                </Row>
                                <div className= {style.line}></div>
                                <Row>
                                    <Col sm = { 12} md = {8}><h5>Total</h5></Col>
                                    
                                    <Col sm = {12} md = {16} className = {style.textRight}><li>162 EGP</li></Col>
                                </Row>
                            </ul>
                    </div>
            </div>
        )
    }
}


export default Summary;