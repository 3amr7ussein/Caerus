import React from "react"
// import { theme } from "../../config/theme";
import { Button } from "antd"
import style from "./style.module.scss"

class BrandedButton extends React.Component {
  render() {
    const { content, styles, redirect, handleClick, handelClick, Icon } = this.props
    return (
      <Button
        // size="large"
        className={style.button}
        style={styles}
        href={redirect}
        onClick={handelClick || handleClick}
      >
        {Icon}
        {content}
      </Button>
    )
  }
}

export default BrandedButton
