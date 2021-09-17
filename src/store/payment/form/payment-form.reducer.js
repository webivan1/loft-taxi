import { LOGOUT } from '../../user/user.constants'
import {
  PAYMENT_FORM_SUBMIT,
  PAYMENT_FORM_SUCCESS,
  PAYMENT_FORM_ERROR,
  PAYMENT_FORM_RESET
} from './payment-form.constants'

const initialState = {
  loader: false,
  error: null,
  success: false
}

export const paymentFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENT_FORM_SUBMIT:
      return { ...state, loader: true, error: null, success: false }
    case PAYMENT_FORM_ERROR:
      return { ...state, error: payload, loader: false, success: false }
    case PAYMENT_FORM_SUCCESS:
      return { ...state, error: null, loader: false, success: true }
    case PAYMENT_FORM_RESET:
      return { ...state, success: false, loader: false, error: null }
    case LOGOUT:
      return { ...initialState }
    default:
      return { ...state }
  }
}