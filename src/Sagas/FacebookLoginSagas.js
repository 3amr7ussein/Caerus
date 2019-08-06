import { call, put, select } from "redux-saga/effects"
import FacebookLoginActions from "../Redux/FacebookLoginRedux"
import { facebookLoginUI } from "../Services/Firebase"
import { FcmSelectors } from "../Redux/FcmRedux"
import { graphQLClient } from "../Services/Api"
import SocialLoginGQL from "../Graphql/MutateSocialLogin"
import UserActions from "../Redux/UserRedux"
import {
  downloadFileToLocal,
  getLocalFile,
  hashFileName,
} from "../Services/FileService"
import { formUpdateProfile } from "../Redux/FormActions"

export function* getFacebookLogin(action) {
  try {
    const fbAuth = yield call(facebookLoginUI)
    if (fbAuth === null || fbAuth.accessToken === null) {
      yield put(FacebookLoginActions.facebookLoginFailure())
      return
    }
    const device_token = yield select(FcmSelectors.getData)
    const response = yield call(graphQLClient.mutate, {
      mutation: SocialLoginGQL,
      variables: {
        socialToken: fbAuth.accessToken,
        userUID: fbAuth.userID,
        deviceId: device_token.token,
      },
    })

    // success?
    if (!response.data || !response.data.userSocialLogin.token) {
      yield put(FacebookLoginActions.facebookLoginFailure())
      return
    }
    const { token, user } = response.data.userSocialLogin

    yield put(UserActions.userSigninApi(token, token))
    yield put(UserActions.userProfile(user))

    // store.dispatch({ type: "UPDATE_PROFILE_REQUEST", payload: { image: {uri: localFileName} , deviceId: device_token.token, } });

    yield put(FacebookLoginActions.facebookLoginSuccess(user))

    if (user.avatar === "avatars/default.png" && fbAuth.userID) {
      const fbAvatarUrl = `https://graph.facebook.com/${
        fbAuth.userID
      }/picture?type=large&redirect=true&width=500&height=500`
      const hashedFileName = hashFileName(`${fbAuth.userID}.jpg`)
      const localFileName = getLocalFile(hashedFileName)
      try {
        const downloadFile = yield call(
          downloadFileToLocal,
          fbAvatarUrl,
          localFileName
        )
        if (downloadFile.statusCode === 200) {
          yield put(
            formUpdateProfile.request({
              deviceId: device_token.token,
              image: {
                uri: localFileName,
              },
            })
          )
        }
      } catch (e) {}
    }
  } catch (e) {
    console.log(e)
    yield put(FacebookLoginActions.facebookLoginFailure())
  }
}
