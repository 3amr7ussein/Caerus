import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import BrandedButton from '../../../brandedButton/BrandedButton';
import WalletLogo from '../../../../../static/Images/img_wallet.png';

const money = 841;
class Wallet extends Component {
    
render(){
    
    return (
        <div className = {style.myCards}>
           <h4 style = { {marginBottom : 30}}>Manage your Wallet</h4>
            <div   className = {style.walletContainer}>
                
                    <img src = {WalletLogo} className = { style.walletIMG}/>
                    <p style = {{ textAlign:'center' ,fontSize : 16 ,color:'black' , marginBottom : 10}}>Your wallet balance is</p>
                    <p className = {style.balance}>{money} EGP</p>
                
                
           </div>
           <p style = { {fontSize : 12 , color : '#bbb'}}>-Payments will automatically deduct from your wallet before attempting to use credit cards or cash.</p>
           <div style = {{display:'flex' , justifyContent : 'center' , width : '100%' , marginTop : 30}}>
           <BrandedButton content = "Add Funds" styles = {{width : 100 , height: 25 , fontSize : 12 , marginBottom :30 }} />
           </div>
        </div>
    )
}

}


export default Wallet; 