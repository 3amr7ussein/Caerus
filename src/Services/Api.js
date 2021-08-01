import "@babel/polyfill"
import { ApolloClient } from "apollo-client"
import fetch from "node-fetch"
import { setContext } from "apollo-link-context"

// import { persistCache } from "apollo-cache-persist"
import { InMemoryCache } from "apollo-cache-inmemory"
import { split } from "apollo-link"
// import { createHttpLink, HttpLink, ApolloLink } from 'apollo-link-http'
// import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from "apollo-utilities"

import { HttpLink } from "apollo-link-http"
import { ApolloLink, from, concat } from "apollo-link"
// import { WebSocketLink } from "apollo-link-ws"
// import { SubscriptionClient } from "subscriptions-transport-ws"

// import { store } from "../../src/State/ReduxWrapper"

const remoteURL = "stark-gorge-14818.herokuapp.com"
// const remoteURL = '192.168.1.2:4000';

const httpLink = new HttpLink({ uri: `https://${remoteURL}`, fetch: fetch })

// const wsClient = new SubscriptionClient(`wss://${remoteURL}`, {
//   reconnect: true,
// })

// const wsLink = new WebSocketLink(wsClient)

const authMiddleware = new ApolloLink((operation, forward) => {
  const token =
    typeof localStorage != undefined ? localStorage.getItem("access_token") : ""
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  })

  return forward(operation)
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    typeof localStorage != undefined ? localStorage.getItem("access_token") : ""

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const updateHeaders = (operation) => {
  const token =
    typeof localStorage != undefined ? localStorage.getItem("access_token") : ""
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  })
}

const cache = new InMemoryCache()

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === "subscription"
  },
  // wsLink,
  httpLink
)

export const graphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  headers: updateHeaders,
  cache,
})
