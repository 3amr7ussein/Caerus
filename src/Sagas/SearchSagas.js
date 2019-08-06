
import { call, put } from 'redux-saga/effects'
import SearchActions from '../Redux/SearchRedux'
import { graphQLClient } from '../Services/Api'
import QueryFindWorkClass from '../Graphql/QueryFindWorkClass'

export function * getSearch (action) {
  const { data } = action
  try {
    let response = yield call(graphQLClient.query, {
      query: QueryFindWorkClass,
      variables: {
        query: data,
        limit: 10
      },
      networkPolicy: 'no-cache'
    })

    console.log(response)
    if (response && response.data) {
      yield put(SearchActions.searchSuccess(response.data.findWorkClass))
    } else {
      yield put(SearchActions.searchFailure("failed"))
    }
  } catch (e) {
    console.log(e)
    yield put(SearchActions.searchFailure(e))
  }
}
