import {
  PROFILE_FORM_START_FETCHING,
  PROFILE_FORM_STOP_FETCHING,
  PROFILE_FORM_ERROR,
  PROFILE_FORM_SUCCESS,
  PROFILE_FORM_RESET
} from './profile-form.constants'
import { updateProfileApi } from './profile-form.api'
import { setProfileDetail } from '../detail/profile-detail.actions'

export const startFetching = () => ({
  type: PROFILE_FORM_START_FETCHING
})

export const stopFetching = () => ({
  type: PROFILE_FORM_STOP_FETCHING
})

export const profileUpdated = () => ({
  type: PROFILE_FORM_SUCCESS
})

export const resetForm = () => ({
  type: PROFILE_FORM_RESET
})

export const profileFormError = errorMessage => ({
  type: PROFILE_FORM_ERROR,
  payload: errorMessage
})

export const updateProfileAsync = fields => async dispatch => {
  dispatch(startFetching())
  try {
    const response = await updateProfileApi(fields)
    if (response.success === false) {
      dispatch(profileFormError(response.error))
    } else {
      dispatch(profileUpdated())
      dispatch(setProfileDetail(fields))
    }
  } catch (e) {
    dispatch(profileFormError(e.message))
  } finally {
    dispatch(stopFetching())
  }
}