import React from "react"
import ProfileFavorites from "./ProfileFavorites"
import style from "./style.module.scss"

class MyFavorite extends React.Component {
  render() {
    // console.log("MyFavorite", this.props.myFav)
    return (
      <div className={style.discoverWrapper}>
        <ProfileFavorites classes={this.props.myFav} />
      </div>
    )
  }
}

export default MyFavorite
