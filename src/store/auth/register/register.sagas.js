import { takeLatest, put, call } from 'redux-saga/effects'
import { REGISTER_ADD_USER } from './register.constants'
import { registerUserApi } from './register.api'
import { error, success } from './register.actions'

export function *addUserByCredentialsSaga({ fields }) {
  try {
    const response = yield call(registerUserApi, fields)
    if (!response.success) {
      yield put(error(response.error))
    } else {
      yield put(success('You have created account successfully'))
    }
  } catch (e) {
    yield put(error(e.message))
  }
}

export function *actionRegisterWatcher() {
  yield takeLatest(REGISTER_ADD_USER, addUserByCredentialsSaga)
}
