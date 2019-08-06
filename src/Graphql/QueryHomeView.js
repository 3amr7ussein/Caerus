import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
query GetHomeView(
  $range: [DateTime!]
  $from: DateTime
  $to: DateTime
  $limit: Int
  $lat: Float
  $lng: Float
) {
  HomeView(
    period: { from: $from, to: $to }
    location: { lat: $lat, lng: $lng  }
    range:$range
    limit:$limit
  ) {
    upcoming {
      ${commonClassObj}
    }
    nearby {
      ${commonClassObj}
    }
  }
}
`
