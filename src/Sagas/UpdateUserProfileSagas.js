import { call, put, select } from 'redux-saga/effects'

import UserActions, { UserSelectors } from '../Redux/UserRedux'
import { FcmSelectors } from '../Redux/FcmRedux'

import { graphQLClient } from '../Services/Api'
import { formUpdateProfile } from '../Redux/FormActions'
import { handleSubmitError } from '../Services/GraphqlResponse'
import { uploadFileToStore, downloadFileFromStore } from '../Services/Firebase'
import { MutationUpdateProfile } from '../Graphql/MutationUpdateProfile'
import { getFileName } from '../Services/FileService'

export function * doUpdateUserProfile (action) {
  const { payload } = action
  try {
    const device_token = yield select(FcmSelectors.getData)
    const user = yield select(UserSelectors.getUser)

    let ref = 'avatars/default.png'

    if (payload.image && payload.image.uri) {
      if (getFileName(user.user.avatar) !== getFileName(payload.image.uri)) {
        const file = yield call(uploadFileToStore, payload.image.uri)
        const downloadFile = yield call(downloadFileFromStore, file.ref)
        ref = downloadFile.ref
      } else {
        ref = user.user.avatar
      }
    }

    const response = yield call(graphQLClient.mutate, {
      mutation: MutationUpdateProfile,
      variables: {
        deviceId: device_token.token,
        name: payload.name,
        email: payload.email,
        gender: payload.gender,
        bio: payload.bio || '',
        phone: payload.phone,
        avatar: ref
      }
    })
    if (response && response.data && response.data.userUpdateProfile) {
      yield put(UserActions.userProfile(response.data.userUpdateProfile))
      yield put(formUpdateProfile.success())
    } else {
      yield put(formUpdateProfile.failure())
    }
  } catch (e) {
    yield put(formUpdateProfile.failure(handleSubmitError(e)))
  }
}
