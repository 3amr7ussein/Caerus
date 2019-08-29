import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import BrandedButton from '../../brandedButton/BrandedButton'


const { Panel } = Collapse;

const Balance = 111;
class Payment extends Component {
render(){
    return (
        <div >
            <h2>Checkout</h2>
            
            <Collapse accordion className = {style.container}>
    <Panel header={<div> <input type = 'radio' className = {style.radio} name = 'payment-method' value = 'Wallet' /> <label>Wallet</label></div>} showArrow = {false} key="1">
        <div className = {style.walletContainer}>
           
           <Row>
               <Col span={18}>
               <div>  Your wallet balance is   </div>

               </Col>
               <Col span={2}></Col>
               <Col span={4}>
               <div className={style.textRight}>{Balance} EGP</div>
               </Col>
           </Row>
        
        </div>
        <div className = {style.hint}>
        <p>-Payment will automatically deduct from year wallet before attempting to use credit cards or Cash</p>
        </div>
        <div className = {style.funds}> <i>+</i> <label>Add Funds</label></div>
       
    </Panel>
    
    <Panel header={<div> <input type = 'radio' name = 'payment-method' value = 'CreditCard' /> <label>Credit Card</label></div>} key="2" showArrow = {false}>
        <div>
            <ul className={style.creditCard}>
                <li><i>+</i> <label>Add a new card</label></li>
            </ul>
        

        </div>
    </Panel>
    
    <div className = {style.cash}> <input type = 'radio' name = 'payment-method' value = 'Cash' /> <label>Cash</label></div>
    {/* <Panel header={<div> <input type = 'radio' name = 'payment-method' value = 'Cash' /> <label>Cash</label></div>} key="3" showArrow = {false}>
            
    </Panel> */}
  
  </Collapse>
      <div className = {style.con} >  <p className={style.textRight}>Secure Checkout</p>
      </div>
        <div className = {style.buttonDiv}> 
            <BrandedButton className = {style.button}
            redirect="/success"
            content = "Next"
            styles = {{
                height : 'auto',
                width : 150,
                paddingLeft : 30,
                paddingRight : 30,
                
                fontSize : 14,
                
            }}
           >Checkout</BrandedButton>   
        </div>
        </div>
    )
}

}


export default Payment; 