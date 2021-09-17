import { takeEvery, put, call } from 'redux-saga/effects'
import { ADDRESS_FETCH_LIST } from './address.constants'
import { addressListApi } from './address.api'
import { error, success } from './address.actions'

export function *fetchAddressListSaga() {
  try {
    const response = yield call(addressListApi)
    if ('addresses' in response) {
      yield put(success(response.addresses))
    } else {
      yield put(error(response.error ?? 'Error getting address list'))
    }
  } catch (e) {
    yield put(error(e.message))
  }
}

export function *actionFetchAddressListWatcher() {
  yield takeEvery(ADDRESS_FETCH_LIST, fetchAddressListSaga)
}