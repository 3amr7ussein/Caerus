/* ***********************************************************
* A short word on how to use this automagically generated file.
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
import TrainerProfileActions from '../Redux/TrainerProfileRedux'
// import { TrainerProfileSelectors } from '../Redux/TrainerProfileRedux'
import { graphQLClient } from '../Services/Api'
import { handleSubmitError } from '../Services/GraphqlResponse'
import QueryTrainer from '../Graphql/QueryTrainer';

export function * getTrainerProfile (api, action) {
  const { data } = action
 
  try {
    const response = yield call(graphQLClient.query, {
      query: QueryTrainer,
      variables: {
        trainerID: data
      },
      fetchPolicy: 'cache-first'
    })
    console.log("Response", response);
    if (!response || !response.data.trainers) yield put(TrainerProfileActions.trainerProfileFailure())

    yield put(TrainerProfileActions.trainerProfileSuccess(response.data.trainers))
  } catch (e) {
    console.log(e)

    yield put(TrainerProfileActions.trainerProfileFailure())
  }
}

  