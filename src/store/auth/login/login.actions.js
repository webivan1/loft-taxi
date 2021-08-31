import {
  LOGIN_ERROR,
  LOGIN_START_FETCHING,
  LOGIN_STOP_FETCHING,
  LOGIN_SUCCESS
} from './login.constants'
import { loginUserApi } from './login.api'
import { setUserWithToken } from '../../user/user.actions'

export const success = () => ({
  type: LOGIN_SUCCESS
})

export const error = message => ({
  type: LOGIN_ERROR,
  payload: message
})

export const startFetching = () => ({
  type: LOGIN_START_FETCHING
})

export const stopFetching = () => ({
  type: LOGIN_STOP_FETCHING
})

export const loginAsync = fields => async dispatch => {
  dispatch(startFetching())
  try {
    const response = await loginUserApi(fields)
    if (!response.success) {
      dispatch(error(response.error))
    } else {
      dispatch(success())
      dispatch(setUserWithToken(response.token))
    }
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(stopFetching())
  }
}