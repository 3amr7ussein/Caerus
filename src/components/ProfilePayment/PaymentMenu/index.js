import React, { Component } from "react"
import style from "./style.module.scss"
import { Collapse, Col, Row } from "antd"
import { Link } from "gatsby"
import InactiveMyCards from '../../../../static/Images/ic_myCard.png'
import activeMyCards from '../../../../static/Images/ic_myCardActive.png';
import InactivePromo from '../../../../static/Images/ic_promoCodes.png';
import activePromo from '../../../../static/Images/ic_promoCodesActive.png';
import InactiveWallet from '../../../../static/Images/ic_wallet.png';
import activeWallet from '../../../../static/Images/ic_walletActive.png';
class PaymentMenu extends Component {
  state = {
    active: 1,
    wid : 100
  }
  criticalWidth = 980;
  
  handleClick = activeTab => {
    this.setState({ active: activeTab })
    this.props.parentCallback(activeTab)
  }

  render() {
    this.state.wid =window.innerWidth
    var inActiveItemStyle = {
      color: "#ccc",
      fontWeight: "bold",
    }

    var activeItemStyle = {
      color: "black",
      fontWeight: "bold",
    }

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
            <img src = {this.state.active===1 ?activeMyCards : InactiveMyCards }  />
            {this.state.wid >this.criticalWidth ? <>My Cards</>:<></>}
          </li>
          <li
            style={
              this.state.active === 2 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(2)
            }}
          >
            <img src = {this.state.active===2 ?activeWallet : InactiveWallet }  />
            {this.state.wid >this.criticalWidth ? <>Wallet</>:<></>}
            
          </li>
          <li
            style={
              this.state.active === 3 ? activeItemStyle : inActiveItemStyle
            }
            onClick={() => {
              this.handleClick(3)
            }}
          >
            <img src = {this.state.active===3 ?activePromo : InactivePromo}  />
            {this.state.wid >this.criticalWidth ? <>Promo Codes</>:<></>}
             
          </li>
          
        </ul>
      </div>
    )
  }
}

export default PaymentMenu
