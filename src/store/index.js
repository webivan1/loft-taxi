import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root.sagas'
// reducers
import { loginReducer } from './auth/login/login.reducer'
import { registerReducer } from './auth/register/register.reducer'
import { userReducer } from './user/user.reducer'
import { paymentDetailReducer } from './payment/detail/payment-detail.reducer'
import { paymentFormReducer } from './payment/form/payment-form.reducer'

export const sagaMiddleware = createSagaMiddleware()
export function runSaga() {
  sagaMiddleware.run(rootSaga)
}

export const reducers = {
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
  paymentDetail: paymentDetailReducer,
  paymentForm: paymentFormReducer
}

export default createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware, logger)
)

runSaga()