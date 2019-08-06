import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userSigninApi: ["access_token", "refresh_token"],
  userProfile: ["user"],
  getUserProfile: ["access_token"],
  userLogout: ["data"],
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  user: {},
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  getUser: state => state.user,
  isAuth: state => state.user.isAuthenticated,
  getToken: state => state.user.access_token,
  getRefreshToken: state => state.user.refresh_token,
}

/* ------------- Reducers ------------- */

export const apiSignIn = (state, { access_token, refresh_token }) => {
  typeof localStorage != undefined &&
    localStorage.setItem("access_token", access_token)
  return state.merge({
    ...state,
    isAnonymous: false,
    isAuthenticated: true,
    access_token,
    refresh_token,
  })
}

export const userProfile = (state, { user }) => state.merge({ ...state, user })

export const logout = state => {
  return INITIAL_STATE
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_SIGNIN_API]: apiSignIn, // userSigninApi
  [Types.USER_PROFILE]: userProfile,
  [Types.USER_LOGOUT]: logout,
})
