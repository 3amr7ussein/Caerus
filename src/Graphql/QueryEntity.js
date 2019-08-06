import gql from "graphql-tag"

export default gql`
  query place($placeID: ID!, $limit: Int, $from: DateTime!) {
    place(id: $placeID) {
      name
      description
      image
      cover
      rating
      branches {
        id
        address
      }
      classes(first: $limit, where: { startAt_gt: $from }) {
        id
        title
        startAt
        owner {
          id
          name
        }
        trainers {
          id
          name
        }
      }
      trainers {
        id
        name
        place {
          id
          name
        }
        avatar
      }
      user {
        phone {
          number
        }
      }
    }
  }
`
