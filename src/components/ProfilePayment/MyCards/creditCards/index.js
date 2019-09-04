import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import {Link} from 'gatsby';
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
const digits = '1234'
const expire = "12/23"
class CreditCard extends Component {
    
      
    state = {
        activeCard :true,
    }

  
render(){

    return (
        <div className = {style.Card} >
           <ul>
                <li style = {this.state.activeCard ? {border : '1.5px solid greenyellow'} : {border : 'none'}}>
                <Row>
               <Col span ={1} >
                       <input type="radio" name='selectCard' />
               </Col>
               <Col span = {6}>
                   <img></img>
               </Col>
               <Col span = {11}>
                   <div className ={style.cardNumber}>
                        **** **** **** <span>{digits}</span>
                   </div>
                   <div className = 'expires'>
                        Expires: <span>{expire}</span>
                   </div>
               </Col>
               <Col span = {2}></Col>
               <Col span = {4} className = {style.btns}>
                   <div>
                       <button style = { {backgroundColor :this.state.activeCard ? 'greenyellow': 'white',
                    color : this.state.activeCard ? 'white' : '#bbb'
                    }}>{this.state.activeCard ? 'Default' : 'Set as Default' }</button>
                   </div>
                   <div>
                       <button disabled >Remove</button>
                   </div>
               </Col>
           </Row>
                </li>
           </ul>
           
        </div>
    )
}

}


export default CreditCard; 