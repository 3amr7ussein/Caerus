import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse ,Button , Col ,Row} from 'antd';
import BrandedButton from '../../brandedButton/BrandedButton'
import { Redirect } from "@reach/router";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const { Panel } = Collapse;


class ConfirmationSection extends Component {
render(){
    return (
        <div>
            <h5>Confirmation</h5>
            <div className = {style.container}>
                <div className = {style.information}>
                
                </div>
            </div>
     
        <p className={style.textRight}>Secure Checkout</p>
       <div className = {style.buttonDiv}> 
            <BrandedButton className = {style.button}
            redirect="/checkout"
            content = "Checkout"
            styles = {{
                height : 'auto',
                width : 'auto',
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


export default ConfirmationSection; 