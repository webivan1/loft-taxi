import { LOGOUT } from '../../user/user.constants'
import {
  PAYMENT_GET_DETAIL,
  PAYMENT_DETAIL_SUCCESS,
  PAYMENT_DETAIL_ERROR
} from './payment-detail.constants'

const initialState = {
  loader: false,
  error: null,
  detail: null
}

export const paymentDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENT_GET_DETAIL:
      return { ...state, loader: true }
    case PAYMENT_DETAIL_ERROR:
      return { ...state, loader: false, error: payload }
    case PAYMENT_DETAIL_SUCCESS:
      return { ...state, error: null, loader: false, detail: payload }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}