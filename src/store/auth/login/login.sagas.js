import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN_FETCH_TOKEN } from './login.constants'
import { error, success } from './login.actions'
import { addUser } from '../../user/user.actions'
import { loginUserApi } from './login.api'
import { userStorage } from '../../user/user.storage'

export function *getTokenByCredentialsSaga({ fields }) {
  try {
    const response = yield call(loginUserApi, fields)

    if (!response.success) {
      yield put(error(response.error))
    } else {
      userStorage.setToken(response.token)
      yield put(success())
      yield put(addUser(response.token))
    }
  } catch (e) {
    yield put(error(e.message))
  }
}

export function *actionLoginWatcher() {
  yield takeLatest(LOGIN_FETCH_TOKEN, getTokenByCredentialsSaga)
}