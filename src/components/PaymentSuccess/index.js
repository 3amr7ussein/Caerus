import React, { Component } from "react"
import style from "./style.module.scss"
import { Collapse, Col, Row } from "antd"
import BrandedButton from "../brandedButton/BrandedButton"
import imgg from "../../../static/Images/img_bookingSuccses.png"

class Success extends Component {
  render() {
    return (
      <div className={style.discoverWrapper}>
        <div className={style.container}>
          <img src={imgg} />
          <h2>Payment Complete!</h2>
          <p>
            Thank you, your payment has been successful and your booking is now
            confirmed.
          </p>
          <p>
            A confirmation email has been sent to <span>name@example.com</span>
          </p>

          <div className={style.buttonDiv}>
            <BrandedButton
              className={style.button}
              redirect="/checkout"
              content="Explore More Classes"
              styles={{
                height: "auto",
                width: "auto",
                paddingLeft: 30,
                paddingRight: 30,

                fontSize: 14,
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Success
