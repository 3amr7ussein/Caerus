import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
mutation addToFav($classId:ID!){
  addToFav(id:$classId){
    id
    favClasses {
        ${commonClassObj}
    }
  }
}
`
