// import firebase, { Notification } from "react-native-firebase"
// import { Alert, Platform } from "react-native"
// import { AccessToken, LoginManager } from "react-native-fbsdk"

// import { store } from "../State/ReduxWrapper"
// import { getFileName, hashFileName } from "./FileService"
// import { USER_IMAGE_DIR } from "../../config/AppConfig"

// ANDROID_CHAN_ID = "CAERUS_CHANNEL"
// export function initFCM() {
//   firebase
//     .messaging()
//     .hasPermission()
//     .then(enabled => {
//       if (!enabled) {
//         firebase
//           .messaging()
//           .requestPermission()
//           .then(() => {
//             permissionGranted()
//           })
//           .catch(error => {
//             Alert.alert(
//               "Notifications alert",
//               "This app relies on notifications to work. please enable notifications to continue using the application!"
//             )
//           })
//       } else {
//         permissionGranted()
//       }
//     })
// }

// export function permissionGranted() {
//   console.log("FCM_PERMISSION_GRANTED")

//   if (Platform.OS === "android") {
//     const channel = new firebase.notifications.Android.Channel(
//       ANDROID_CHAN_ID,
//       "Caerus",
//       firebase.notifications.Android.Importance.Max
//     ).setDescription("Caerus")

//     // Create the channel
//     firebase.notifications().android.createChannel(channel)
//   }

//   firebase
//     .messaging()
//     .getToken()
//     .then(fcmToken => {
//       if (fcmToken) {
//         registerToken(fcmToken)
//       } else {
//         registerToken("COULD NOT GET FCM TOKEN")
//       }
//     })
// }
// export function onNewToken() {
//   return firebase.messaging().onTokenRefresh(fcmToken => {
//     registerToken(fcmToken)
//   })
// }

// export function onNotificationDisplayed() {
//   return firebase.notifications().onNotificationDisplayed(notification => {
//     console.log("FCM_ON_NOTIFICATION_DISPLAY", notification)
//   })
// }

// export function onNotification() {
//   return firebase.notifications().onNotification(notification => {
//     console.log("FCM_ON_NOTIFICATION", notification)

//     const notificationBody = new firebase.notifications.Notification()
//       .setNotificationId(notification._notificationId)
//       .setTitle(notification._title)
//       .setBody(notification._body)

//     if (Platform.OS === "android") {
//       notificationBody.android
//         .setChannelId(ANDROID_CHAN_ID)
//         .android.setSmallIcon("ic_launcher")
//     }

//     firebase.notifications().displayNotification(notificationBody)
//   })
// }

// export function registerToken(fcmToken) {
//   console.log("FCM_NEW_TOKEN\n", fcmToken)
//   store.dispatch({ type: "FCM_REQUEST", payload: { token: fcmToken } })
// }

// // auth
// export function annoySignIn() {
//   return firebase.auth().signInAnonymously()
// }
// export function phoneSignIn(phone, forceResend = false) {
//   return firebase.auth().signInWithPhoneNumber(phone, forceResend)
// }
// export function phoneConfirm(confirmResults, code) {
//   return confirmResults.confirm(code)
// }
// export let authState = () => firebase.auth().currentUser

// export async function facebookLoginUI() {
//   try {
//     const result = await LoginManager.logInWithReadPermissions([
//       "public_profile",
//       "email",
//     ])

//     if (result.isCancelled) {
//       // handle this however suites the flow of your app
//       throw new Error("User cancelled request")
//     }

//     console.log(
//       `Login success with permissions: ${result.grantedPermissions.toString()}`
//     )

//     // get the access token
//     const data = await AccessToken.getCurrentAccessToken()

//     if (!data) {
//       // handle this however suites the flow of your app
//       throw new Error("Something went wrong obtaining the users access token")
//     }

//     return data
//   } catch (e) {
//     return null
//   }
// }

// // files
// // export let uploadFileToStore = localPath => {
// //   const fileName = getFileName(localPath)
// //   const hashedFileName = hashFileName(fileName)
// //   return firebase
// //     .storage()
// //     .ref(`${USER_IMAGE_DIR}/${hashedFileName}`)
// //     .putFile(`${localPath}`)
// // }
// // export let downloadFileFromStore = fileRef => {
// //   return firebase
// //     .storage()
// //     .ref(fileRef)
// //     .downloadFile(
// //       `${firebase.storage.Native.DOCUMENT_DIRECTORY_PATH}/${fileRef}`
// //     )
// // }
