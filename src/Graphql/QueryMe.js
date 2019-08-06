import gql from "graphql-tag"
import { commonAuthUserObj } from "./Common"

export default gql`
{
    me {
        ${commonAuthUserObj}
    }
}
`
