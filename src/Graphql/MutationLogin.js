import gql from 'graphql-tag'
import {commonAuthUserObj} from './Common'

export default gql`
  mutation Login($email: String!, $password: String!, $deviceId: String) {
    login(email: $email, password: $password, deviceId: $deviceId) {
      token
      user { ${commonAuthUserObj} }
    }
  }
`
