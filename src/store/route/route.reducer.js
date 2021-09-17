import {
  ROUTE_DIRECTION_BUILD,
  ROUTE_DIRECTION_FAIL,
  ROUTE_FETCH_DIRECTION,
  ROUTE_RESET,
  ROUTE_SAVE_ADDRESS
} from './route.constants'

const initialState = {
  loader: false,
  error: null,
  map: null,
  address: {
    start: null,
    finish: null
  }
}

export const routeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROUTE_FETCH_DIRECTION:
      return { ...state, loader: true, error: null }
    case ROUTE_SAVE_ADDRESS:
      return { ...state, address: { ...state.address, ...payload } }
    case ROUTE_DIRECTION_BUILD:
      return { ...state, loader: false, map: payload }
    case ROUTE_DIRECTION_FAIL:
      return { ...state, loader: false, error: payload, map: null }
    case ROUTE_RESET:
      return { ...initialState }
    default:
      return { ...state }
  }
}