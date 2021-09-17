import {
  ROUTE_DIRECTION_BUILD,
  ROUTE_DIRECTION_FAIL,
  ROUTE_FETCH_DIRECTION,
  ROUTE_RESET,
  ROUTE_SAVE_ADDRESS
} from './route.constants'

export const setStartRoute = address => ({
  type: ROUTE_SAVE_ADDRESS,
  payload: { start: address }
})

export const setFinishRoute = address => ({
  type: ROUTE_SAVE_ADDRESS,
  payload: { finish: address }
})

export const routesReset = () => ({
  type: ROUTE_RESET
})

export const fetchRoutesAsync = fields => ({
  type: ROUTE_FETCH_DIRECTION,
  fields
})

export const success = map => ({
  type: ROUTE_DIRECTION_BUILD,
  payload: map
})

export const error = errorMessage => ({
  type: ROUTE_DIRECTION_FAIL,
  payload: errorMessage
})