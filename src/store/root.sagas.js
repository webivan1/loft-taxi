import { all } from 'redux-saga/effects'
// sagas
import { actionLoginWatcher } from './auth/login/login.sagas'
import { actionRegisterWatcher } from './auth/register/register.sagas'
import { actionPaymentDetailWatcher } from './payment/detail/payment-detail.sagas'
import { actionPaymentFormWatcher } from './payment/form/payment-form.sagas'
import { actionLogoutWatcher } from './user/user.sagas'

export function* rootSaga() {
  yield all([
    actionLoginWatcher(),
    actionLogoutWatcher(),
    actionRegisterWatcher(),
    actionPaymentDetailWatcher(),
    actionPaymentFormWatcher(),
  ])
}