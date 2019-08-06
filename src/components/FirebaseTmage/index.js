import React, { Component } from "react"
import { getFirebase, downloadFile } from "../../../static/Firebase"

const defaultImage = require("../../../static/Images/defaultavatar.png")
export default class FirebaseImage extends Component {
  state = {
    imageUrl: defaultImage,
  }

  componentDidMount() {
    const app = import("firebase")
    const auth = import("firebase/auth")
    const database = import("firebase/firestore")

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      firebase.auth().signInAnonymously()

      downloadFile(values[0], this.props.fbref)
        .then(url => {
          console.log("SETSTATE", url)
          this.setState({
            imageUrl: url,
          })
        })
        .catch(e => {
          console.log("SETSTATE", e)
          this.setState({
            imageUrl: defaultImage,
          })
        })
    })
  }

  render() {
    if (this.props.clickable && this.state.imageUrl != defaultImage)
      return (
        <a href={this.state.imageUrl} target={"_blank"}>
          <img {...this.props} src={this.state.imageUrl} />
        </a>
      )

    return <img {...this.props} src={this.state.imageUrl} />
  }
}
