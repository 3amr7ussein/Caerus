import gql from "graphql-tag"
import { commonAuthUserObj } from "./Common"

export const MutationUpdateProfile = gql`
mutation userUpdateProfile(
  $deviceId: String!
  $name: String
  $email: String
  $gender: GENDER_TYPES
  $bio: String
  $phone: String
  $avatar: String
) {
  userUpdateProfile(
    name: $name
    avatar: $avatar
    gender: $gender
    phone: $phone
    bio: $bio
    email: $email
    deviceId: $deviceId
  ) {
    ${commonAuthUserObj}
  }
}
`
