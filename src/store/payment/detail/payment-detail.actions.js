import {
  PAYMENT_GET_DETAIL,
  PAYMENT_DETAIL_ERROR,
  PAYMENT_DETAIL_SUCCESS
} from './payment-detail.constants'

export const setPaymentDetail = data => ({
  type: PAYMENT_DETAIL_SUCCESS,
  payload: data
})

export const paymentDetailError = errorMessage => ({
  type: PAYMENT_DETAIL_ERROR,
  payload: errorMessage
})

export const fetchPaymentDetailAsync = () => ({
  type: PAYMENT_GET_DETAIL
})