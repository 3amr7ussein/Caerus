import gql from 'graphql-tag'
import {commonAuthUserObj} from './Common'

export default gql`
mutation SocialLogin($userUID:String!, $socialToken:String! , $deviceId:String){
  userSocialLogin(socialUID:$userUID, 
    socialToken: $socialToken
    deviceId:$deviceId
  ){
    token
    user {${commonAuthUserObj}}
  }
}
`
