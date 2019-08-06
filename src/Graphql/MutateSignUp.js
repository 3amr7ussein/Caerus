import gql from 'graphql-tag'
import {commonAuthUserObj} from './Common'

export default gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $name: String!
    $phoneCountryCode: String!
    $phone: String!
    $avatar: String!
    $loginBy: LOGIN_TYPES
    $deviceId: String
  ) {
    userSignUp(
      email: $email
      password: $password
      name: $name
      phoneCountryCode: $phoneCountryCode
      phone: $phone
      avatar: $avatar,
      loginBy: $loginBy
      deviceId: $deviceId
    ) {
      token
      user { ${commonAuthUserObj} }
    }
  }
`
