
import { call, put } from 'redux-saga/effects'
import { formCheckoutClass } from '../Redux/FormActions'
import UserActions from '../Redux/UserRedux'
import BookingActions from '../Redux/BookingRedux'
import { graphQLClient } from '../Services/Api'
import MutationBookClass from '../Graphql/MutationBookClass'
import { handleSubmitError } from '../Services/GraphqlResponse'

export function * doCheckoutClass (action) {
  const {payload} = action
  console.log(MutationBookClass)
  try {
    const response = yield call(graphQLClient.mutate, {
      mutation: MutationBookClass,
      variables: {
        ...payload
      }
    })
    console.log(response)
    if (response && response.data) {
      yield put(UserActions.userProfile(response.data.userBookWorkClass))
      yield put(formCheckoutClass.success())
      yield put(BookingActions.bookingRequest())
    } else {
      yield put(formCheckoutClass.failure(handleSubmitError('Unknown error!')))
    }
  } catch (e) {
    console.log(e)
    yield put(formCheckoutClass.failure(handleSubmitError(e)))
  }
}
