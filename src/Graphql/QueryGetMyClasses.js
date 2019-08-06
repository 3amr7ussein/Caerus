import gql from "graphql-tag"
import { commonClassObj } from "./Common"

export default gql`
{
    me {
        classes {
            ${commonClassObj}
        }
    }
}
`
