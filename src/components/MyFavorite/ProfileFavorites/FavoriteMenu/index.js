import React, { Component } from "react"
import style from "./style.module.scss"
import ic_classesActive from "../../../../../static/Images/ic_classesActive.png"
import ic_classes from "../../../../../static/Images/ic_classes.png"
import ic_studActive from "../../../../../static/Images/ic_studActive.png"
import ic_stud from "../../../../../static/Images/ic_stud.png"

class FavoriteMenu extends Component {
  state = {
    active: 1,
    wid : 100
  }

  handleClick = activeTab => {
    this.setState({ active: activeTab })
    this.props.parentCallback(activeTab)
  }
 
  render() {
    this.state.wid = window.innerWidth
    var inActiveItemStyle = {
      color: "#ccc",
      fontWeight: "bold",
    }
    
    var activeItemStyle = {
      color: "black",
      fontWeight: "bold",
    }

    console.log('Window' , this.state.wid)
    return (
      
      <div>
        <ul className={style.payList}>
          {/* when user click on list item it change the # of active list item inside state */}
          {/* styling is according to the active list item from state.active */}
            
          <li
            style={
              this.state.active === 1 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(1)
            }}
          >
            <div style={{ marginRight: 12, display: "inline" }}>
              {this.state.active === 1 ? (
                <img src={ic_classesActive} />
              ) : (
                <img src={ic_classes} />
              )}
            </div>
            {console.log("BEFORE", this.state.wid)}
          {this.state.wid > 980 ? <>Classes</> : <></>}
          </li>
          
          
          <li
            style={
              this.state.active === 2 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(2)
            }}
          >
            <div style={{ marginRight: 12, display: "inline" }}>
              {" "}
              {this.state.active === 1 ? (
                <img src={ic_stud} />
              ) : (
                <img src={ic_studActive} />
              )}
            </div>
         {this.state.wid > 980 ? <>Studios</>:<></>}
          </li>
        
        </ul>
      </div>
    )
  }
}

export default FavoriteMenu
