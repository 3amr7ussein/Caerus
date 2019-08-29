import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import PaymentMenu from './PaymentMenu/index';
import MyCards from './MyCards/index';
import Wallet from './Wallet/index';
import PromoCodes from './PromoCodes/index';
import { Tabs } from "antd"

const { TabPane } = Tabs;

class ProfilePayment extends Component {

    state = {
           ActiveTab : 1 , 
    }

    
   callbackFunction = (childData) => {
       this.setState({ActiveTab : childData})
   }

render(){

    let show;
    if(this.state.ActiveTab===1){
        show = <MyCards />
    }
    else if(this.state.ActiveTab===2)
    {
      show=  <Wallet />
    }
    else if (this.state.ActiveTab===3){
       show = <PromoCodes />
    }
    return (
        <div>
            

            <Row >
                <Col span={4} > <PaymentMenu parentCallback = {this.callbackFunction}/></Col>
                <Col span = {1}></Col>
                <Col span = {19} >

                    {/* {this.state.ActiveNum ? <MyCards /> : <div>Hello</div>}  */}
                    {/* <MyCards /> */}
                    {show}
                </Col>
            </Row>


        </div>
    )
}

}


export default ProfilePayment; 