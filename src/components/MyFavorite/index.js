import React from "react"
import ClassCard from "../ClassCard"

class MyFavorite extends React.Component {
  render() {
    // console.log("MyFavorite", this.props.myFav)
    return (
      <div>
        <h1>MY MyFavorite Page</h1>
        <ClassCard myClasses={this.props.myFav} />
      </div>
    )
  }
}

export default MyFavorite
