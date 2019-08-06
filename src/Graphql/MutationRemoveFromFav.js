import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
mutation removeFromFav($classId:ID!){
  removeFromFav(id:$classId){
    id
    favClasses {
        ${commonClassObj}
    }
  }
}
`
