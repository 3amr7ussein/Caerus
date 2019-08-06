import { call, put } from "redux-saga/effects"
import CategoriesActions from "../Redux/CategoriesRedux"
import { graphQLClient } from "../Services/Api"
import QueryCategories from "../Graphql/QueryCategories"
export function* getCategories(action) {
  // const { data } = action
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryCategories,
    })
    if (response && response.data.categories) {
      yield put(CategoriesActions.categoriesSuccess(response.data.categories))
    }
  } catch (e) {}
}
