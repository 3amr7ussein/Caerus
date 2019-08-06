import firebaseConfig from "../../config/firebaseConfig"

let firebaseCache

export const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(firebaseConfig)
  firebaseCache = firebase
  return firebase
}

export const downloadFile = (firebase, ref) => {
  if (firebaseCache) {
    firebase = firebaseCache
  }

  var storage = firebase.storage()
  var storageRef = storage.ref()
  var tangRef = storageRef.child(ref)
  return tangRef.getDownloadURL()
}
