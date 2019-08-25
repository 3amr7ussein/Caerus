import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse ,Button , Col ,Row} from 'antd';

const { Panel } = Collapse;

const Balance = 111;
class Payment extends Component {
render(){
    return (
        <div >
            <h5>Checkout</h5>
            
            <Collapse accordion className = {style.container}>
    <Panel header={<div> <input type = 'radio' className = {style.radio} name = 'payment-method' value = 'Wallet' /> <label>Wallet</label></div>} showArrow = {false} key="1">
        <div className = {style.walletContainer}>
           
           <Row>
               <Col span={18}>
               <div>  <p  >Your wallet balance is</p>   </div>

               </Col>
               <Col span={2}></Col>
               <Col span={4}>
               <div className={style.textRight}><p >{Balance} EGP</p></div>
               </Col>
           </Row>
        
        </div>
        <p>-payment will automatically deduct from year wallet before attempting to use credit cards or Cash</p>
        <div> <i>+</i> <label>Add Funds</label></div>
       
    </Panel>
    
    <Panel header={<div> <input type = 'radio' name = 'payment-method' value = 'CreditCard' /> <label>Credit Card</label></div>} key="2" showArrow = {false}>
        <div>
            <ul className={style.crediteCard}>
                <li><i>+</i> <label>Add a new card</label></li>
            </ul>
        

        </div>
    </Panel>
    
    <Panel header={<div> <input type = 'radio' name = 'payment-method' value = 'Cash' /> <label>Cash</label></div>} key="3" showArrow = {false}>
            
    </Panel>
  
  </Collapse>
        <p className={style.textRight}>Secure Checkout</p>
       <div className = {style.buttonDiv}> 
            <Button className = {style.button}>Next</Button>   
        </div>
        </div>
    )
}

}


export default Payment; 