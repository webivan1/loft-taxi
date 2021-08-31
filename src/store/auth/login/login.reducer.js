import {
  LOGIN_START_FETCHING,
  LOGIN_STOP_FETCHING,
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
    case LOGIN_START_FETCHING:
      return { ...state, error: null, success: false, loader: true }
    case LOGIN_STOP_FETCHING:
      return { ...state, loader: false }
    case LOGIN_ERROR:
      return { ...state, error: payload, success: false }
    case LOGIN_SUCCESS:
      return { ...state, success: true }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}