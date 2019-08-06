import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categoriesRequest: ["data"],
  categoriesSuccess: ["categories"],
  categoriesFailure: null,
})

export const CategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  categories: [],
  error: null,
})

/* ------------- Selectors ------------- */

export const CategoriesSelectors = {
  getData: state => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, categories: [] })

// successful api lookup
export const success = (state, action) => {
  const { categories } = action
  return state.merge({ fetching: false, error: null, categories })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, categories: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: request,
  [Types.CATEGORIES_SUCCESS]: success,
  [Types.CATEGORIES_FAILURE]: failure,
})
