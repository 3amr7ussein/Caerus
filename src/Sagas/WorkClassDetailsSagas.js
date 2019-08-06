import { call, put } from 'redux-saga/effects'
import workClassActions from '../Redux/WorkClassDetailsRedux'

import { graphQLClient } from '../Services/Api'
import { handleSubmitError } from '../Services/GraphqlResponse'
import QuerySingleWorkClass from '../Graphql/QuerySingleWorkClass'

export function * getWorkClassDetails (action) {
  const { data } = action

  try {
    const response = yield call(graphQLClient.query, {
      query: QuerySingleWorkClass,
      variables: {
        classID: data
      },
      fetchPolicy: 'cache-first'
    })

    if (!response || !response.data.singleWorkClass) yield put(workClassActions.workClassDetailsFailure())

    yield put(workClassActions.workClassDetailsSuccess(response.data.singleWorkClass))
  } catch (e) {
    console.log(e)

    yield put(workClassActions.workClassDetailsFailure())
  }
}
