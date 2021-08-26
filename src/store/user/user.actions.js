import { userStorage } from './user.storage'
import { ADD_USER, LOGOUT } from './user.constants'

export const addUser = token => ({
  type: ADD_USER,
  payload: token
})

const logoutAction = () => ({
  type: LOGOUT
})

export const setUserWithToken = token => dispatch => {
  dispatch(addUser(token))
  userStorage.setToken(token)
}

export const logout = () => dispatch => {
  dispatch(logoutAction())
  userStorage.removeToken()
}