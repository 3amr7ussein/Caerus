import React, { Component } from "react";
import style from "./style.module.scss";
import Payment from './Checkout-Section/index';
import Summary from './Order-Summary/index';
import {Row , Col} from 'antd';
class Checkout extends Component {
render(){
    return (
        <div className={style.discoverWrapper}>
            <div className = {style.container}>
                <Row>
                    <Col span={16}>
                        <Payment />
                    </Col>
                    <Col span={1}></Col>
                   <Col span={7}>
                        <Summary/>
                    </Col>
                    </Row>
                     
                
        </div></div>

    )
}

}


export default Checkout; 