import React from "react"
import ProfileEdit from "./ProfileEdit"
import style from "./style.module.scss"

class EditProfile extends React.Component {
  render() {
    // console.log("MyFavorite", this.props.myFav)
    return (
      <div className={style.discoverWrapper}>
        <ProfileEdit userInfo={this.props.userInfo} />
      </div>
    )
  }
}

export default EditProfile
