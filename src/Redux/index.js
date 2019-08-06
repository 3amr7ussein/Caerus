import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import { reducer as formReducer } from "redux-form"

import configureStore from "./CreateStore"
import rootSaga from "../Sagas/"
import ReduxPersist from "../../config/ReduxPersist"

/* ------------- Assemble The Reducers ------------- */
export const reducers = {
  // github: require("./GithubRedux").reducer,
  // search: require("./SearchRedux").reducer,
  login: require("./LoginRedux").reducer,
  user: require("./UserRedux").reducer,
  fcm: require("./FcmRedux").reducer,
  categories: require("./CategoriesRedux").reducer,
  searchHistory: require("./SearchHistoryRedux").reducer,
  home: require("./HomeRedux").reducer,
  addToCalendar: require("./AddtocalanderRedux").reducer,
  favorites: require("./FavoriteRedux").reducer,
  bookings: require("./BookingRedux").reducer,
  notifications: require("./NotificationsRedux").reducer,
  entityProfile: require("./EntityProfileRedux").reducer,
  trainerProfile: require("./TrainerProfileRedux").reducer,

  facebookLogin: require("./FacebookLoginRedux").reducer,
  workClassDetails: require("./WorkClassDetailsRedux").reducer,

  form: formReducer,
}

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  )

  return store
}
