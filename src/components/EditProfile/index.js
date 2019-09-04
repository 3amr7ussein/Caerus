import React , { Component } from 'react';
import ClassCard from "../ClassCard"

class EditProfile extends Component {
  render() {
    // console.log("MyFavorite", this.props.myFav)
    return (
      <div>
        <h1>MY Edit Profile Page</h1>
        <ClassCard myClasses={this.props.myFav} />
      </div>
    )
  }
}

export default EditProfile;
