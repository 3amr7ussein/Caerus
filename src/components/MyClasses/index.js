import React from "react"
import { Tabs } from "antd"
import ClassCard from "../ClassCard"
import style from "./style.module.scss"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class MyClasses extends React.Component {
  // _renderEmpty = () => (
  //   <div style={styles.empty}>
  //     <div style={styles.emptydiv}>
  //       <Text style={styles.favEmpty}>{"There is No Booking Classes"}</Text>
  //       <Text style={styles.saveFav}>
  //         {"Book your favorite listing by tapping the bookmark icon"}
  //       </Text>
  //       <RoundedButton
  //         onPress={() => this.props.navigation.navigate("SearchScreen")}
  //         style={styles.roundButton}
  //         clear
  //       >
  //         {"Search for classes"}
  //       </RoundedButton>
  //     </div>
  //     <div
  //       style={{ flex: 2, flexDirection: "column", justifyContent: "flex-end" }}
  //     >
  //       <Image
  //         source={Images.empty_fav}
  //         style={styles.imageEmpty}
  //         resizeMode={"contain"}
  //       />
  //     </div>
  //   </div>
  // )

  // _renderHeader = () => (
  //   <div style={{ marginHorizontal: 16 }}>
  //     <SafeAreadiv />
  //     <Header
  //       style={{ marginTop: 40, flex: undefined, marginBottom: 10 }}
  //       textStyle={{ marginBottom: 0 }}
  //       content={"My Classes"}
  //     />
  //     <div>
  //       <Tabs onChange={callback} type="card">
  //         <TabPane tab="Tab 1" key="1">
  //           Content of Tab Pane 1
  //         </TabPane>
  //         <TabPane tab="Tab 2" key="2">
  //           Content of Tab Pane 2
  //         </TabPane>
  //       </Tabs>
  //     </div>
  //   </div>
  // )
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
