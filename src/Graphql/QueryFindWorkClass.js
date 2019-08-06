import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
query findWorkClass($query: String!, $limit: Int) {
  findWorkClass(query: $query, limit: $limit) {
    ${commonClassObj}
  }
}
`
