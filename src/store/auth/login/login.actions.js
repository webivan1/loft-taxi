import {
  LOGIN_FETCH_TOKEN,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from './login.constants'

export const success = () => ({
  type: LOGIN_SUCCESS
})

export const error = message => ({
  type: LOGIN_ERROR,
  payload: message
})

export const loginAsync = fields => ({
  type: LOGIN_FETCH_TOKEN,
  fields
})