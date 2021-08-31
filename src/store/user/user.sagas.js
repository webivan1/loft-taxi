import { takeLatest } from 'redux-saga/effects'
import { LOGOUT } from './user.constants'
import { userStorage } from './user.storage'

export function *actionLogoutWatcher() {
  yield takeLatest(LOGOUT, function *() {
    userStorage.removeToken()
  })
}