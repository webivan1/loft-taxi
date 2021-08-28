import { LOGOUT } from '../../user/user.constants'
import {
  PROFILE_DETAIL_START_FETCHING,
  PROFILE_DETAIL_STOP_FETCHING,
  PROFILE_DETAIL_ERROR,
  PROFILE_DETAIL_SET_DETAIL
} from './profile-detail.constants'

const initialState = {
  loader: false,
  error: null,
  detail: null
}

export const profileDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_DETAIL_START_FETCHING:
      return { ...state, loader: true, error: null }
    case PROFILE_DETAIL_STOP_FETCHING:
      return { ...state, loader: false }
    case PROFILE_DETAIL_ERROR:
      return { ...state, error: payload }
    case PROFILE_DETAIL_SET_DETAIL:
      return { ...state, error: null, detail: payload }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}