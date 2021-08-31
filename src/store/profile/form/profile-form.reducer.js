import { LOGOUT } from '../../user/user.constants'
import {
  PROFILE_FORM_START_FETCHING,
  PROFILE_FORM_STOP_FETCHING,
  PROFILE_FORM_ERROR,
  PROFILE_FORM_SUCCESS,
  PROFILE_FORM_RESET
} from './profile-form.constants'

const initialState = {
  loader: false,
  error: null,
  success: false
}

export const profileFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_FORM_START_FETCHING:
      return { ...state, loader: true, error: null, success: false }
    case PROFILE_FORM_STOP_FETCHING:
      return { ...state, loader: false }
    case PROFILE_FORM_ERROR:
      return { ...state, error: payload, success: false }
    case PROFILE_FORM_SUCCESS:
      return { ...state, error: null, success: true }
    case PROFILE_FORM_RESET:
      return { ...state, success: false, error: null }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}