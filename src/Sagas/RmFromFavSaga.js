import { call, put } from "redux-saga/effects"
import { graphQLClient } from "../Services/Api"
import AddToFavActions from "../Redux/FavoriteRedux"
import { formRemoveFromFav } from "../Redux/FormActions"
import MutationRemoveFromFav from "../Graphql/MutationRemoveFromFav"
import { handleSubmitError } from "../Services/GraphqlResponse"

export function* doRemoveFromFavorite(action) {
  const { payload } = action
  try {
    const response = yield call(graphQLClient.mutate, {
      mutation: MutationRemoveFromFav,
      variables: {
        ...payload,
      },
    })
    if (response && response.data && response.data.removeFromFav) {
      yield put(formRemoveFromFav.success())
      yield put(
        AddToFavActions.favoriteSuccess(response.data.removeFromFav.favClasses)
      )
    } else {
      yield put(formRemoveFromFav.failure(handleSubmitError(response)))
    }
  } catch (e) {
    yield put(formRemoveFromFav.failure(handleSubmitError(e)))
  }
}
