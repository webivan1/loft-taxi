import { takeLatest, call, put } from 'redux-saga/effects'
import { PAYMENT_GET_DETAIL } from './payment-detail.constants'
import { paymentDetailError, setPaymentDetail } from './payment-detail.actions'
import { fetchPaymentDetailApi } from './payment-detail.api'

export function *fetchPaymentDetailSaga() {
  try {
    const response = yield call(fetchPaymentDetailApi)
    if ('success' in response && response.success === false) {
      yield put(paymentDetailError(response.error))
    } else {
      yield put(setPaymentDetail(response))
    }
  } catch (e) {
    yield put(paymentDetailError(e.message))
  }
}

export function *actionPaymentDetailWatcher() {
  yield takeLatest(PAYMENT_GET_DETAIL, fetchPaymentDetailSaga)
}