import {
  REGISTER_START_FETCHING,
  REGISTER_STOP_FETCHING,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './register.constants'
import { LOGOUT } from '../../user/user.constants'

const initialState = {
  loader: false,
  error: null,
  success: null,
}

export const registerReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case REGISTER_START_FETCHING:
      return { ...state, error: null, success: null, loader: true }
    case REGISTER_STOP_FETCHING:
      return { ...state, loader: false }
    case REGISTER_ERROR:
      return { ...state, error: payload, success: null }
    case REGISTER_SUCCESS:
      return { ...state, success: payload }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}