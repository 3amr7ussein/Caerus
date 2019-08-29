import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import BrandedButton from '../../brandedButton/BrandedButton'



class ConfirmationSection extends Component {
render(){
 
    return (
        <div>
            <h2>Confirmation</h2>
            <div className = {style.container}>
                <div className = {style.information}>
                    <Row>
                        <Col lg={1} md={2} sm={2}><h2>3x</h2></Col>
                        <Col lg ={17} md={16} sm ={16}><h2>Fluid Yoga AR</h2></Col>
                        <Col span={6}><h2 className = {style.textRight}>60 EGP</h2></Col>
                      
                              <Col span = {17}>
                                <div>
                                    <h3>Date</h3>
                                     Wednesday, 14 April 2019
                                    </div>
                                </Col>
                                
                                <Col span = {7}>
                                    <div className={style.textRight}>
                                    <h3>Time</h3>
                                        14:00
                                    </div>
                                 </Col>
                    </Row>
                    <div className = {style.dashedLine}></div>
                    <Row className = {style.money}>
                        <Col span ={12}><h3>Subtotal</h3></Col>
                        <Col span = {12} className = {style.textRight}>180 EGP</Col>
                        <Col span ={7}><h3>Promo Code Discount</h3> </Col>
                        <Col span = {6}><i>-10%</i></Col>
                        <Col span = {11} className = {style.textRight}>- 18 EGP</Col>
                        
                    </Row>
                    <Row className = {style.money}><Col span ={12}><h2>Order Total</h2></Col>
                        <Col span = {12} className = {style.textRight}><h2>162 EGP</h2></Col></Row>
                </div>
            </div>
     
        <div className = {style.con}><p className={style.textRight}>Secure Checkout</p></div>
       <div className = {style.buttonDiv}> 
            <BrandedButton className = {style.button}
            redirect="/checkout"
            content = "Checkout"
            styles = {{
                height : 'auto',
                width : 150,
                paddingLeft : 30,
                paddingRight : 30,
                
                fontSize : 14,
                
            }}
           ></BrandedButton>   
        </div>
        </div>
    )

}

}


export default ConfirmationSection; 