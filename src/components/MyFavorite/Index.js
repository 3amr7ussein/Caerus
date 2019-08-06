import React from "react"
import ClassCard from "../ClassCard"
// import { theme } from "../../config/theme";
// import { Link } from "gatsby"
// import style from "./style.module.scss"

class MyFavorite extends React.Component {
  render() {
    console.log("MyFavorite", this.props.myFav)
    return (
      <div>
        <h1>MY MyFavorite Page</h1>
        <ClassCard myClasses={this.props.myFav} />
      </div>
    )
  }
}

export default MyFavorite
