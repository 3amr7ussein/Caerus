import React, { Component } from "react";
import style from "./style.module.scss";
import ConfirmationSection from "./Confirmation-Section/index";
import Summary from '../Checkout/Order-Summary/index';
import {Row , Col} from 'antd';

class Confirmation extends Component {
    
render(){
    
    return (
    // console.log(this.props.info);
    
    <div className={style.discoverWrapper}>
            <div className = {style.container}> 
                <Row>
                    <Col span={16}>
                        <ConfirmationSection />
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


export default Confirmation; 