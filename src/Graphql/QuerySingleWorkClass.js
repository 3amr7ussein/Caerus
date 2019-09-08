import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
query SingleWorkClass($classID: ID!){
  singleWorkClass(id:$classID){
    id
    title
    description
    maximumUsers
    availablePlaces
    price
    gender
    level
    age
    duration
    branch {
      id
      area {
        id
        location_lat
        location_lng
      }
      phone
      address
      
    }
    disclaimer{
      id
      text
    }
    categories {
      id
      name
    }
    trainers {
      id
      name
      avatar
      expertise
      certifications
    }
    owner {
      id
      image
      cover
      name
      address
      location_lat
      location_lng
      area {
        id
        location_lat
        location_lng
      }
      branches {
        id
        address
        area {
          id
          name
          location_lat
          location_lng
        }
      }
      description
      classes (first: 10) {
        ${commonClassObj}
      }
    }
    startAt
  }
}
`
