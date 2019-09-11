import { takeLatest, all, takeEvery } from "redux-saga/effects"
// import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux"
// import { GithubTypes } from '../Redux/GithubRedux'
import {
  formLogin,
  formRegister,
  formSearch,
  formUpdateProfile,
  formCheckoutClass,
  formAddToFavorite,
  formRemoveFromFav,
} from "../Redux/FormActions"
import { FacebookLoginTypes } from "../Redux/FacebookLoginRedux"
import { workClassDetailsTypes } from "../Redux/WorkClassDetailsRedux"
import { CategoriesTypes } from "../Redux/CategoriesRedux"
import { HomeTypes } from "../Redux/HomeRedux"
import { BookingTypes } from "../Redux/BookingRedux"
import { AddtocalanderTypes } from "../Redux/AddtocalanderRedux"

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas"
// import { getUserAvatar } from './GithubSagas'
import { getUserLogin } from "./UserLoginSagas"
import { signupUserSaga } from "./UserRegisterSagaSagas"
import { getFacebookLogin } from "./FacebookLoginSagas"
import { getWorkClassDetails } from "./WorkClassDetailsSagas"
import { getCategories } from "./CategoriesSagas"
import { getSearch } from "./SearchSagas"
import { doUpdateUserProfile } from "./UpdateUserProfileSagas"
import { getHome } from "./HomeSagas"
import { doCheckoutClass } from "./CheckoutClassSagas"
import { getAddtocalander } from "./AddtocalanderSagas"
import { doAddToFavorite } from "./AddToFavoriteSagas"
import { doRemoveFromFavorite } from "./RmFromFavSaga"
import { FavoriteTypes } from "../Redux/FavoriteRedux"
import { getFavorite } from "./FavoriteSagas"
import { getBooking } from "./BookingSagas"
import { getNotifications } from "./NotificationsSagas"
import { NotificationsTypes } from "../Redux/NotificationsRedux"

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),
    // takeLatest(LoginTypes.LOGIN_REQUEST, loginRequestQuery),
    // takeLatest(FacebookLoginTypes.FACEBOOK_LOGIN_REQUEST, getFacebookLogin),
    takeLatest(
      workClassDetailsTypes.WORK_CLASS_DETAILS_REQUEST,
      getWorkClassDetails
    ),
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategories),
    takeLatest(HomeTypes.HOME_REQUEST, getHome),
    // takeLatest(AddtocalanderTypes.ADDTOCALANDER_REQUEST, getAddtocalander),
    takeLatest(FavoriteTypes.FAVORITE_REQUEST, getFavorite),
    takeLatest(BookingTypes.BOOKING_REQUEST, getBooking),
    // takeLatest(NotificationsTypes.NOTIFICATIONS_REQUEST, getNotifications),

    // // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    yield takeEvery(formLogin.REQUEST, getUserLogin),
    yield takeEvery(formRegister.REQUEST, signupUserSaga),
    // yield takeEvery(formSearch.REQUEST, getSearch),
    yield takeEvery(formUpdateProfile.REQUEST, doUpdateUserProfile),
    // yield takeEvery(formCheckoutClass.REQUEST, doCheckoutClass),
    yield takeEvery(formAddToFavorite.REQUEST, doAddToFavorite),
    yield takeEvery(formRemoveFromFav.REQUEST, doRemoveFromFavorite),
  ])
}
