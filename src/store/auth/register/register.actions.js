import {
  REGISTER_ADD_USER,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './register.constants'

export const success = message => ({
  type: REGISTER_SUCCESS,
  payload: message
})

export const error = message => ({
  type: REGISTER_ERROR,
  payload: message
})

export const addUserAsync = fields => ({
  type: REGISTER_ADD_USER,
  fields
})

