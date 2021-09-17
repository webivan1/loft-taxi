import { takeLatest, put, call } from 'redux-saga/effects'
import { PAYMENT_FORM_SUBMIT } from './payment-form.constants'
import { paymentFormError, paymentUpdated } from './payment-form.actions'
import { setPaymentDetail } from '../detail/payment-detail.actions'
import { updatePaymentApi } from './payment-form.api'

export function *updatePaymentSaga({ fields }) {
  try {
    const response = yield call(updatePaymentApi, fields)

    if (response.success === false) {
      yield put(paymentFormError(response.error))
    } else {
      yield put(paymentUpdated())
      yield put(setPaymentDetail(fields))
    }
  } catch (e) {
    yield put(paymentFormError(e.message))
  }
}

export function *actionPaymentFormWatcher() {
  yield takeLatest(PAYMENT_FORM_SUBMIT, updatePaymentSaga)
}