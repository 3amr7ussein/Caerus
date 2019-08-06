import { SubmissionError } from 'redux-form'

const translateMessage = (msg) => {
  msg = msg.replace('GraphQL error: ', '').trim()
  switch (msg) {
    case 'invalid token':
      return 'Please Login First'
    case 'Not authorized':
      return 'Please Login First'
    default:
      return msg
  }
}
const checkErrorFields = (msg) => {
  switch (true) {
    case msg.includes('A unique constraint would be'):
      const fieldName = msg.substring(msg.lastIndexOf('=') + 1).trim()
      return {
        [fieldName]: `${fieldName} already exists`
      }
  }
}

export const handleSubmitError = (v, extras) => {
  let fixedMessage = translateMessage(v.message || v)

  return new SubmissionError({
    ...checkErrorFields(v.message || v),
    ...extras,
    error: fixedMessage,
    _error: fixedMessage
  })
}
