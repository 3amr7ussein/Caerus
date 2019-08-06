import { call, put, select } from "redux-saga/effects"

import UserActions from "../Redux/UserRedux"

import { graphQLClient } from "../Services/Api"
import LoginGQL from "../Graphql/MutationLogin"
import { formLogin } from "../Redux/FormActions"
import { handleSubmitError } from "../Services/GraphqlResponse"
import { FcmSelectors } from "../Redux/FcmRedux"

export function* getUserLogin(action) {
  try {
    const device_token = yield select(FcmSelectors.getData)

    const response = yield call(graphQLClient.mutate, {
      mutation: LoginGQL,
      variables: {
        ...action.payload,
        deviceId: device_token.token,
      },
    })

    // success?
    if (response.data && response.data.login.token) {
      const { token, user } = response.data.login

      yield put(UserActions.userSigninApi(token, token))
      yield put(UserActions.userProfile(user))

      yield put(formLogin.success(user))
    }
  } catch (e) {
    console.log(e)
    yield put(
      formLogin.failure(handleSubmitError(e, { email: "Invalid Login" }))
    )
  }
}
