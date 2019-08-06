import { call, put, select } from 'redux-saga/effects'

import UserActions from '../Redux/UserRedux'
import { FcmSelectors } from '../Redux/FcmRedux'

import { graphQLClient } from '../Services/Api'
import SignupGQL from '../Graphql/MutateSignUp'
import { formRegister } from '../Redux/FormActions'
import { handleSubmitError } from '../Services/GraphqlResponse'
import { uploadFileToStore, downloadFileFromStore } from '../Services/Firebase'

export function * signupUserSaga (action) {
  const { payload } = action
  try {
    /*
    $email: String!
    $password: String!
    $name: String!
    $phoneCountryCode: String!
    $phone: String!
    $avatar: String!
    $loginBy: LOGIN_TYPES
    $deviceId: String
     */
    const device_token = yield select(FcmSelectors.getData)
    let ref = 'avatars/default.png'
    if (payload.image && payload.image.uri) {
      const file = yield call(uploadFileToStore, payload.image.uri)
      const downloadFile = yield call(downloadFileFromStore, file.ref)
      ref = downloadFile.ref
    }

    const response = yield call(graphQLClient.mutate, {
      mutation: SignupGQL,
      variables: {
        email: payload.email.toLowerCase(),
        password: payload.password,
        name: `${payload.firstname} ${payload.lastname}`.toLowerCase(),
        phoneCountryCode: '+2',
        phone: payload.phone,
        loginBy: 'LOGIN_MANUAL',
        deviceId: device_token.token,
        avatar: ref
      }
    })
    console.log(response)
    // success?
    if (response.data && response.data.userSignUp.token) {
      const { token, user } = response.data.userSignUp

      yield put(UserActions.userSigninApi(token, token))
      yield put(UserActions.userProfile(user))

      yield put(formRegister.success(user))
    }
  } catch (e) {
    yield put(
      formRegister.failure(handleSubmitError(e, { email: 'Email Already Exists' }))
    )
  }
}
