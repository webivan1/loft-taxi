import {
  REGISTER_ERROR,
  REGISTER_START_FETCHING,
  REGISTER_STOP_FETCHING,
  REGISTER_SUCCESS
} from './register.constants'
import { registerUserApi } from './register.api'

export const success = message => ({
  type: REGISTER_SUCCESS,
  payload: message
})

export const error = message => ({
  type: REGISTER_ERROR,
  payload: message
})

export const startFetching = {
  type: REGISTER_START_FETCHING
}

export const stopFetching = {
  type: REGISTER_STOP_FETCHING
}

export const addUserAsync = fields => async dispatch => {
  dispatch(startFetching)
  try {
    const response = await registerUserApi(fields)
    if (!response.success) {
      dispatch(error(response.error))
    } else {
      dispatch(success('You have created account successfully'))
    }
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(stopFetching)
  }
}

