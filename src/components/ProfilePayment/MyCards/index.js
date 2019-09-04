import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import CreditCard from './creditCards/index';
import BrandedButton from '../../brandedButton/BrandedButton';

class MyCards extends Component {
    
  
  
render(){
    
    return (
        <div className = {style.myCards}>
           <h4 style = { {marginBottom : 30}}>Manage your Credit Cards</h4>
           <CreditCard />
           <div style = {{display:'flex' , justifyContent : 'center' , width : '100%' , marginTop : 30}}>
           <BrandedButton content = "Add Credit Card" styles = {{width : 150 , height: 25 , fontSize : 12 , marginBottom :30 }} />
           </div>
        </div>
    )
}

}


export default MyCards; 