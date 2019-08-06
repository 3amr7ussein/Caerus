import { call, put } from "redux-saga/effects"
import HomeActions from "../Redux/HomeRedux"

import { graphQLClient } from "../Services/Api"
import QueryHomeView from "../Graphql/QueryHomeView"

export function* getHome(action) {
  const { data } = action
  try {
    const homeResponse = yield call(graphQLClient.query, {
      query: QueryHomeView,
      variables: {
        ...data,
        limit: 4,
      },
      networkPolicy: "no-cache",
    })
    console.log(homeResponse)
    yield put(HomeActions.homeSuccess(homeResponse.data.HomeView))
  } catch (e) {
    console.log(e)
  }
}
