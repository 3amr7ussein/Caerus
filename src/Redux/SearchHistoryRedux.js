import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchAddEntry: ['query']
})

export const SearchHistoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  entries: []
})

/* ------------- Selectors ------------- */

export const SearchHistorySelectors = {
  getData: state => state.entries
}

/* ------------- Reducers ------------- */

// request the data from an api
export const add = (state, { query }) => {
  const queryArray = [query, ...state.entries ].filter((v, i, a) => a.indexOf(v) === i)
  return state.merge({ entries: queryArray})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_ADD_ENTRY]: add
})
