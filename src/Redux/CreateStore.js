import { createStore, applyMiddleware, compose } from "redux"
import { formActionSaga } from "redux-form-saga"

import Rehydration from "../Services/Rehydration"
import ReduxPersist from "../../config/ReduxPersist"
import Config from "../../config/DebugConfig"
import createSagaMiddleware from "redux-saga"

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */

  /* ------------- Analytics Middleware ------------- */

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  // remove common noise '@@redux-form/CHANGE'

  // if (__DEV__) {
  //   // the logger master switch
  //   const USE_LOGGING = Config.reduxLogging
  //   // silence these saga-based messages
  //   // create the logger
  //   const logger = createLogger({
  //     predicate: (getState, { type }) =>
  //       USE_LOGGING && R.not(R.contains(type, loggingBlacklist)),
  //     collapsed: true,
  //     duration: true,
  //     diff: true,
  //   })
  //   middleware.push(logger)
  // }
  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)
  sagaMiddleware.run(formActionSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
