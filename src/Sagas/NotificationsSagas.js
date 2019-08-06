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

import { call, put } from 'redux-saga/effects'
import NotificationsActions from '../Redux/NotificationsRedux'
import QueryMyNotifications from '../Graphql/QueryMyNotifications'
import { graphQLClient } from '../Services/Api'
// import { NotificationsSelectors } from '../Redux/NotificationsRedux'

export function * getNotifications (action) {
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryMyNotifications,
      fetchPolicy: 'no-cache'
    })
  // get current data from Store
  // const currentData = yield select(NotificationsSelectors.getData)
  // make the call to the api
  
    console.log(response)
  // success?
  if (response && response.data.me) {
    yield put(NotificationsActions.notificationsSuccess(response.data.me.notifications))
    } else {
      yield put(NotificationsActions.notificationsFailure())
    }   
  } catch (e) {
    console.log(e)
    yield put(NotificationsActions.notificationsFailure(e))
  }
}
   