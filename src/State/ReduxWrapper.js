import "@babel/polyfill"
import { ApolloProvider } from "react-apollo"
import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { reducers } from "../Redux"
import createSagaMiddleware from "redux-saga"
import { createLogger } from "redux-logger"
import { formActionSaga } from "redux-form-saga"
import rootSaga from "../Sagas"
import { graphQLClient } from "../Services/Api"

const isDebuggingInChrome = true
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
})

let middleware = []
let enhancers = []

const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)
middleware.push(logger)

enhancers.push(applyMiddleware(...middleware))

export const store = createStore(
  combineReducers({ ...reducers }),
  {},
  compose(...enhancers)
)

sagaMiddleware.run(rootSaga)
sagaMiddleware.run(formActionSaga)

export default ({ element }) => (
  <ApolloProvider client={graphQLClient}>
    <Provider store={store}>{element}</Provider>
  </ApolloProvider>
)
