import { all, fork } from 'redux-saga/effects'
// sagas
import { actionLoginWatcher } from './auth/login/login.sagas'
import { actionRegisterWatcher } from './auth/register/register.sagas'
import { actionPaymentDetailWatcher } from './payment/detail/payment-detail.sagas'
import { actionPaymentFormWatcher } from './payment/form/payment-form.sagas'
import { actionLogoutWatcher } from './user/user.sagas'
import { actionFetchAddressListWatcher } from './address/address.sagas'
import { actionRouteWatcher } from './route/route.sagas'

export function* rootSaga() {
  yield all([
    fork(actionLoginWatcher),
    fork(actionLogoutWatcher),
    fork(actionRegisterWatcher),
    fork(actionPaymentDetailWatcher),
    fork(actionPaymentFormWatcher),
    fork(actionFetchAddressListWatcher),
    fork(actionRouteWatcher)
  ])
}