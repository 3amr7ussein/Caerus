import gql from "graphql-tag"

export default gql`
  subscription myNotificationFeed($userId: ID!) {
    notificationFeed(id: $userId) {
      mutation
      node {
        id
        text
        title
        readAt
      }
    }
  }
`
