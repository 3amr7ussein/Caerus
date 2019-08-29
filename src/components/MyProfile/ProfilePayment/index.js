import React, { Component } from "react";
import style from "./style.module.scss";
import { Collapse , Col ,Row} from 'antd';
import PaymentMenu from './PaymentMenu/index';
import MyCards from './MyCards/index';
class ProfilePayment extends Component {
render(){
    return (
        <div>
            

            {/* <Row >
                <Col span={4} > <PaymentMenu/></Col>
                <Col span = {1}></Col>
                <Col span = {19} >
                    <MyCards />
                </Col>
            </Row> */}
        </div>
    )
}

}


export default ProfilePayment; 