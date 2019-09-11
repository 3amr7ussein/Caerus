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
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react"
import ImmutablePersistenceTransform from "../Services/ImmutablePersistenceTransform"

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
let rootReducer = combineReducers({ ...reducers })

let store, persistor

if (typeof window !== `undefined` && window) {
  const persistConfig = {
    key: "root",
    blacklist: [
      // "nav",
      "userRegister",
      "form",
      "facebookLogin",
      "workClassDetails",
      // "search",
      // "github",
    ],
    storage,
    transforms: [ImmutablePersistenceTransform],
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  store = createStore(persistedReducer, {}, compose(...enhancers))
  persistor = persistStore(store)
} else {
  store = createStore(rootReducer, {}, compose(...enhancers))
}

sagaMiddleware.run(rootSaga)
sagaMiddleware.run(formActionSaga)

export default ({ element }) => (
  <ApolloProvider client={graphQLClient}>
    <Provider store={store}>
      {!!(typeof window !== `undefined` && window) ? (
        <PersistGate loading={null} persistor={persistor}>
          {element}
        </PersistGate>
      ) : (
        { element }
      )}
    </Provider>
  </ApolloProvider>
)
