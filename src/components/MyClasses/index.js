import React from "react"
import { Tabs } from "antd"
import ClassCard from "../ClassCard"
import style from "./style.module.scss"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class MyClasses extends React.Component {
  render() {
    // console.log("MYCLASSES", this.props.myClasses)

    return (
      <div
      // className={style.discoverWrapper}
      >
        <h1>MY BookingCLASSES Page</h1>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            <ClassCard myClasses={this.props.myClasses} />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
        ,
      </div>
    )
  }
}

export default MyClasses
