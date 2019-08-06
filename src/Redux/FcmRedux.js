import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fcmRequest: ['payload'],
  fcmNotifications: ['payload']
})

export const FcmTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  notifications: []
})

/* ------------- Selectors ------------- */

export const FcmSelectors = {
  getData: state => state.fcm
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { payload }) =>
  state.merge({ ...state, token: payload.token })

// successful api lookup
export const onNotifications = (state, action) => {
  const { payload } = action
  return state.merge({ ...state, notifications: [...state.notifications, payload] })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FCM_REQUEST]: request,
  [Types.FCM_NOTIFICATIONS]: onNotifications
})
