export const commonAuthUserObj = `
    
        id
        name
        email
        userState
        avatar
        gender
        bio
  
        classes {
            id
            title
            
        }
        favClasses { 
            id
            title
        }
        phone {
            id
            number
            code
        }
    
`
export const commonClassObj = `
id
title
startAt
availablePlaces
price
trainers{
    name
}
duration
    owner{
        id
        name
        image
        cover
    }
    categories {
        id
        name
    }
    `
