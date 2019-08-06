
import { call, put } from 'redux-saga/effects'
import { graphQLClient } from '../Services/Api'
import AddToFavActions from '../Redux/FavoriteRedux'
import MutationAddToFav from '../Graphql/MutationAddToFav'
import { formAddToFavorite } from '../Redux/FormActions'
import { handleSubmitError } from '../Services/GraphqlResponse'

export function* doAddToFavorite(action) {
  const { payload } = action
  try {
    const response = yield call(graphQLClient.mutate, {
      mutation: MutationAddToFav,
      variables: {
        ...payload
      }
    })
    console.log(response)
    if (response && response.data && response.data.addToFav) {
      yield put(formAddToFavorite.success())
      yield put(AddToFavActions.favoriteSuccess(response.data.addToFav.favClasses))
    } else {
      yield put(formAddToFavorite.failure(handleSubmitError('err')))
    }
  } catch (e) {
    yield put(formAddToFavorite.failure(handleSubmitError(e)))
  }
}
