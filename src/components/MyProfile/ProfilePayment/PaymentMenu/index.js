import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import {Link} from 'gatsby';

class PaymentMenu extends Component {
    
    state = {
        active :1,
    }

  
  
render(){
   var inActiveItemStyle = {
    
    color : '#ccc',
    fontWeight : 'bold'

};

    var activeItemStyle = {
    
        color : 'black',
        fontWeight : 'bold'
    };
    
    return (
        <div>
            <ul className = {style.payList}>
                {/* when user click on list item it change the # of active list item inside state */}
                {/* styling is according to the active list item from state.active */}
                <li 
                style = {this.state.active === 1 ? activeItemStyle : inActiveItemStyle}
                onClick = {()=>{this.setState({ active :1})}}
                >
                
                    <i></i> My Cards 
                </li>

                <li style = {this.state.active === 2 ? activeItemStyle : inActiveItemStyle}
               onClick = {()=>{this.setState({active :2})}}
                ><i></i> Wallet </li>


                <li style = {this.state.active === 3 ? activeItemStyle : inActiveItemStyle}
                onClick = {()=>{this.setState({ active :3 })}}
                ><i></i> Promo Codes </li>
            </ul>
        </div>
    )
}

}


export default PaymentMenu; 