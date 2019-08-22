import React, { Component } from 'react';
import Header from './Header';
import { Tabs } from 'antd';
import style from "./style.module.scss"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class MyProfile extends Component {

  constructor(){
    super();

    this.state = {
      
    }
  }

  render(){

    return(

      <div>

      <Header />
        <Tabs defaultActiveKey="1" onChange={callback} style={{ justifyContent:"center" ,margin:"0 auto"}}>

      
          <TabPane tab="My Classes" key="1" style={{ backgroundColor:'blue'}} >
            My Classes
          </TabPane>
          <TabPane tab="Favorites" key="2">
            Favorites
          </TabPane>
          <TabPane tab="Payment" key="3">
            Payment
          </TabPane>
          <TabPane tab="Settings" key="4">
            Settings
          </TabPane>

         
        </Tabs>

      </div>
   


    )
  }
}

export default MyProfile;