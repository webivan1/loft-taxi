import { takeLatest, put, call } from 'redux-saga/effects'
import { ROUTE_FETCH_DIRECTION } from './route.constants'
import { error, success } from './route.actions'
import { buildRouteApi } from './route.api'

export function *fetchRouteSaga({ fields }) {
  try {
    const response = yield call(buildRouteApi, fields)

    if ('success' in response && !response.success) {
      yield put(error(response.error ?? 'Error'))
    } else if (response.length === 0) {
      yield put(error('Маршрут не найден'))
    } else {
      yield put(success(response))
    }
  } catch (e) {
    yield put(error(e.message))
  }
}

export function *actionRouteWatcher() {
  yield takeLatest(ROUTE_FETCH_DIRECTION, fetchRouteSaga)
}