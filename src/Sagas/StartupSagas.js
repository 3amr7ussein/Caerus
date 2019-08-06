import { put, call } from "redux-saga/effects"
import UserActions from "../Redux/UserRedux"
import { graphQLClient } from "../Services/Api"
import QueryMe from "../Graphql/QueryMe"

// process STARTUP actions
export function* startup(action) {
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryMe,
      fetchPolicy: "no-cache",
    })
    if (response && response.data.me) {
      yield put(UserActions.userProfile(response.data.me))
    }
  } catch (e) {
    console.log(e)
  }
}
