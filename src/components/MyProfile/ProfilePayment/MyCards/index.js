import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import CreditCard from './creditCards/index';

class MyCards extends Component {
    
  
  
render(){
    
    return (
        <div className = {style.myCards}>
           <h4>Manage your Credit Cards</h4>
           <CreditCard />
        </div>
    )
}

}


export default MyCards; 