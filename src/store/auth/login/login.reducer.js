import {
  LOGIN_FETCH_TOKEN,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from './login.constants'
import { LOGOUT } from '../../user/user.constants'

const initialState = {
  loader: false,
  error: null,
  success: false,
}

export const loginReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case LOGIN_FETCH_TOKEN:
      return { ...state, error: null, success: false, loader: true }
    case LOGIN_ERROR:
      return { ...state, error: payload, success: false, loader: false }
    case LOGIN_SUCCESS:
      return { ...state, success: true, loader: false }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}