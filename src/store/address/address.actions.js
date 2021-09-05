import {
  ADDRESS_FETCH_LIST,
  ADDRESS_LIST_SUCCESS,
  ADDRESS_LIST_ERROR
} from './address.constants'

export const success = addresses => ({
  type: ADDRESS_LIST_SUCCESS,
  payload: addresses
})

export const error = errorMessage => ({
  type: ADDRESS_LIST_ERROR,
  payload: errorMessage
})

export const fetchAddresses = () => ({
  type: ADDRESS_FETCH_LIST
})