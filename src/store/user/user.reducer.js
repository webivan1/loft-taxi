import { ADD_USER, LOGOUT } from './user.constants'

const initialState = {
  isLoggedIn: false,
  token: null,
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, token: payload, isLoggedIn: true }
    case LOGOUT:
      return { ...state, token: null, isLoggedIn: false }
    default:
      return { ...state }
  }
}