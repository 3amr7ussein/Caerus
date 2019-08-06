import { call, put } from "redux-saga/effects"
import LoginActions from "../Redux/LoginRedux"
import { loginRequestApi } from "../Components/DataBase/LoginApi"
import { SubmissionError } from "redux-form"
// import {handleSubmitError} from '../Themes/utility'

// // attempts to login

export function* loginRequestQuery(action) {
  try {
    const Result = yield call(loginRequestApi, action)

    if (Result.data.login) {
      yield put({
        type: LoginActions.loginSuccess,
        payload: {
          token: Result.data.login.token,
          user: Result.data.login.user,
          isLoggedIn: true,
        },
      })
    }
  } catch (e) {
    yield put(LoginActions.loginFailure(SubmissionError(e)))
  }
}

// // import { LoginSelectors } from '../Redux/LoginRedux'

// // export function * getLogin (api, action) {

// //   const { data } = action
// //   // get current data from Store
// //   // const currentData = yield select(LoginSelectors.getData)
// //   // make the call to the api
// //   const response = yield call(api.getlogin, data)

// //   // success?
// //   if (response.ok) {
// //     // You might need to change the response here - do this with a 'transform',
// //     // located in ../Transforms/. Otherwise, just pass the data back from the api.
// //     yield put(LoginActions.loginSuccess(response.data))
// //   } else {
// //     yield put(LoginActions.loginFailure())
// //   }
// // }
