import gql from "graphql-tag"

export default gql`
  {
    me {
      id
      notifications(orderBy: id_DESC) {
        id
        text
        title
        readAt
        createdAt
      }
    }
  }
`
