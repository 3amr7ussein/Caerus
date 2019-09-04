import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import BrandedButton from '../../brandedButton/BrandedButton';
import PromoCodesList from './PromoCodesList/index';
class PromoCodes extends Component {
    
render(){
    
    return (
        <div className = {style.myCards}>
        <h4 style = { {marginBottom : 30}}>Manage your Promo Codes</h4>
        <div className = {style.promoCodeContainer}>
             <p>Active Promo Codes</p>
             <PromoCodesList />
             <div className={style.splitLine}></div>
             <p style = {{color : 'black' , fontWeight : 'bold'}}>Add a Promo Code</p>
             <Row style = {{marginBottom :30}}>
                 <Col span = {9}>
                     <input type="text" />
                 </Col>
                 <Col span = {1}> </Col>
                 <Col span = {6}>
                     <BrandedButton 
                     content = "Add"
                     styles = {{height : 26 , width : 120 , fontWeight : 'normal' , fontSize:15}}
                     />
                 </Col>
             </Row>
        </div>
     </div>
    )
}

}


export default PromoCodes; 