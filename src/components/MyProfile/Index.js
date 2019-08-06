import React from "react"
// import { theme } from "../../config/theme";
// import { Link } from "gatsby"
// import style from "./style.module.scss"

class MyProfile extends React.Component {
  render() {
    console.log("MYProfile", this.props.myData)
    return (
      <div>
        <h1>MY Profile Page</h1>
      </div>
    )
  }
}

export default MyProfile
