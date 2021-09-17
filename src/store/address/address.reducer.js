import {
  ADDRESS_FETCH_LIST,
  ADDRESS_LIST_ERROR,
  ADDRESS_LIST_SUCCESS
} from './address.constants'

const initialState = {
  loader: false,
  error: null,
  list: [],
}

export const addressReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ADDRESS_FETCH_LIST:
      return { ...state, loader: true, error: null }
    case ADDRESS_LIST_SUCCESS:
      return { ...state, loader: false, list: payload }
    case ADDRESS_LIST_ERROR:
      return { ...state, loader: false, error: payload }
    default:
      return { ...state }
  }
}