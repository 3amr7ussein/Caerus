import gql from "graphql-tag"
import { commonAuthUserObj } from "./Common"
import { commonClassObj } from "./Common"

export default gql`
{
    me {
        ${commonAuthUserObj}
    classes {
        ${commonClassObj}
        }
    favClasses {
        ${commonClassObj}
        }
    },
}
`
