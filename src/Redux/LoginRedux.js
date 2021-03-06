import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'user', 'isLoggedIn'],
  loginFailure: ['error']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  error: null,
  fetching: false
})

/* ------------- Selectors ------------- */
export const isLoggedIn = (loginState) => loginState.email !== null
// export const LoginSelectors = {
//   getData: state => state.data
// }

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => state.merge({ fetching: true })
// export const request = (state, { data }) =>
//   state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, payload) =>
  state.merge({ fetching: false, error: null, ...payload })
// export const success = (state, action) => {
//   const { payload } = action
//   return state.merge({ fetching: false, error: null, payload })

// Something went wrong somewhere.
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure
})
