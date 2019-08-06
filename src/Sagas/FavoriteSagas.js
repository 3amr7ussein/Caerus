/* ***********************************************************
 * A short word on how to use this automatically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from "redux-saga/effects"
import FavoriteActions from "../Redux/FavoriteRedux"
import QueryGetmyFav from "../Graphql/QueryGetMyFav"
import { graphQLClient } from "../Services/Api"
// import { FavoriteSelectors } from '../Redux/FavoriteRedux'

export function* getFavorite(action) {
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryGetmyFav,
      fetchPolicy: "no-cache",
    })
    if (response && response.data.me) {
      yield put(FavoriteActions.favoriteSuccess(response.data.me.favClasses))
    } else {
      yield put(FavoriteActions.favoriteFailure())
    }
  } catch (e) {
    yield put(FavoriteActions.favoriteFailure())
  }
}
