import gql from "graphql-tag"
const moment = require("moment")

export default gql`
  query trainer($trainerID: ID!, $limit: Int, $from: DateTime!) {
    trainer(id: $trainerID) {
      id
      name
      avatar
      bio
      trainingin {
        id
        name
      }
      training(first: $limit, where: { startAt_gt: $from }) {
        id
        title
        duration
        startAt
        owner {
          id
          cover
          name
        }
        trainers {
          id
          name
        }
      }
    }
  }
`
