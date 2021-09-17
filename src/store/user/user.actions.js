import { ADD_USER, LOGOUT } from './user.constants'

export const addUser = token => ({
  type: ADD_USER,
  payload: token
})

export const logout = () => ({
  type: LOGOUT
})