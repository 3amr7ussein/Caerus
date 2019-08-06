import gql from "graphql-tag"
import { commonAuthUserObj } from "./Common"

export default gql`
mutation 
BookClass(
  $classId:ID!,
  $paymentMethod:PAYMENT_METHOD!,
  $cardId:ID
  $bookedplaces:Int) {
  userBookWorkClass(
    classId:$classId , 
    paymentMethod:$paymentMethod , 
    cardId: $cardId,
    bookedplaces: $bookedplaces
    ){
    ${commonAuthUserObj}
  }
}
`
