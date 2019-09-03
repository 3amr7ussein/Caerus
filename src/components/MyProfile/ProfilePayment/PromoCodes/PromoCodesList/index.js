import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';


class PromoCodesList extends Component {
    
render(){
    
    return (
        <div className = {style.promoCodeList}>
           <ul>
               <li>
                   <Row>
                       <Col span={3}> <span>10% OFF</span> </Col>
                       <Col span={3}> <span>9</span> Days Left </Col>
                       <Col span = {18} className = {style.textRight}>Expires on <span>April 30, 2019</span></Col>
                   </Row>
               </li>
           </ul>
        </div>
    )
}

}


export default PromoCodesList; 