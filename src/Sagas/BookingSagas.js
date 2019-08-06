import { call, put } from 'redux-saga/effects'
import BookingActions from '../Redux/BookingRedux'
import { graphQLClient } from '../Services/Api'
import QueryGetMyClasses from '../Graphql/QueryGetMyClasses';
// import { BookingSelectors } from '../Redux/BookingRedux'

export function * getBooking (action) {
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryGetMyClasses,
      fetchPolicy: 'no-cache'
    })
  if (response && response.data.me) {
    yield put(BookingActions.bookingSuccess(response.data.me.classes))
  } else {
    yield put(BookingActions.bookingFailure())
  }
} catch (e) {
  yield put(BookingActions.bookingFailure())
}
}
