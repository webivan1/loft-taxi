import { createStore, combineReducers, applyMiddleware } from 'redux'
import { actionAsyncMiddleware } from './middleware/actionAsyncMiddleware'

import { loginReducer } from './auth/login/login.reducer'
import { registerReducer } from './auth/register/register.reducer'
import { userReducer } from './user/user.reducer'

export default createStore(combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer
}), applyMiddleware(actionAsyncMiddleware))