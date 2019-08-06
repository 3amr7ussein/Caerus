// @flow
import React, { Component } from "react"
import { Link } from "gatsby"
import { reduxForm, change } from "redux-form"

import ic_save from "../../../static/Images/ic_save.png"
import ic_saved from "../../../static/Images/ic_saved.png"

import { connect } from "react-redux"

import { formAddToFavorite, formRemoveFromFav } from "../../Redux/FormActions"
import { Spin } from "antd"

class MarkAsFav extends Component {
  componentDidMount() {
    this.props.dispatch(change(this.props.form, "classId", this.props.classId))
  }

  render() {
    const { style, handleSubmit, isFav, submitting } = this.props
    if (this.props.user && this.props.user.isAuthenticated) {
      if (submitting) {
        return (
          <Spin
            size="small"
            color={"#fff"}
            style={{ color: "#fff", height: 20 }}
          />
        )
      } else if (isFav) {
        return (
          <Link to="#" onClick={handleSubmit(formRemoveFromFav)} style={style}>
            <img src={ic_saved} />
          </Link>
        )
      } else {
        return (
          <Link to="#" onClick={handleSubmit(formAddToFavorite)} style={style}>
            <img src={ic_save} />
          </Link>
        )
      }
    }
    //   else {
    //     return (
    //       <Link
    //         ovClick={() => this.props.navigation.navigate('LaunchScreen')} style={style}>
    //         <Image source={Images.ic_book} />
    //       </Link>
    //     )
    //   }
  }
}
const mapStateToProps = (state, ownProps) => {
  const favList = state.favorites.payload
  return {
    isFav: !!(
      favList && favList.findIndex(fav => fav.id === ownProps.classId) >= 0
    ),
    user: state.user,
  }
}

export default reduxForm()(
  connect(
    mapStateToProps,
    null
  )(MarkAsFav)
)
