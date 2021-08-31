import {
  REGISTER_ADD_USER,
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
    case REGISTER_ADD_USER:
      return { ...state, error: null, success: null, loader: true }
    case REGISTER_ERROR:
      return { ...state, error: payload, success: null, loader: false }
    case REGISTER_SUCCESS:
      return { ...state, success: payload, loader: false }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}