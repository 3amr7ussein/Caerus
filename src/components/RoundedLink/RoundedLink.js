import React from "react"
// import { theme } from "../../config/theme";
import { Link } from "gatsby"
import style from "./style.module.scss"

class RoundedLink extends React.Component {
  render() {
    const { content, styles, redirect, handleClick, handelClick } = this.props
    return (
      <Link
        // size="large"
        className={style.button}
        style={styles}
        to={redirect}
        onClick={handelClick || handleClick}
      >
        {content}
      </Link>
    )
  }
}

export default RoundedLink
