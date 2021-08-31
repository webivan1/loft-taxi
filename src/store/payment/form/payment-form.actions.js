import {
  PAYMENT_FORM_SUBMIT,
  PAYMENT_FORM_SUCCESS,
  PAYMENT_FORM_ERROR,
  PAYMENT_FORM_RESET
} from './payment-form.constants'

export const paymentUpdated = () => ({
  type: PAYMENT_FORM_SUCCESS
})

export const resetForm = () => ({
  type: PAYMENT_FORM_RESET
})

export const paymentFormError = errorMessage => ({
  type: PAYMENT_FORM_ERROR,
  payload: errorMessage
})

export const updatePaymentAsync = fields => ({
  type: PAYMENT_FORM_SUBMIT,
  fields
})