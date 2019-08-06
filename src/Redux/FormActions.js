import { createFormAction } from 'redux-form-saga'

export const formLogin = createFormAction('LOGIN')
export const formRegister = createFormAction('REGISTER')
export const formSearch = createFormAction('SEARCH')
export const formUpdateProfile = createFormAction('UPDATE_PROFILE')
export const formCheckoutClass = createFormAction('CHECKOUT_PROJECT')
export const formAddToFavorite = createFormAction('ADD_TO_FAV')
export const formRemoveFromFav = createFormAction('RM_FROM_FAV')
