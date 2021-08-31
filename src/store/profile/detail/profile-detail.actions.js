import {
  PROFILE_DETAIL_START_FETCHING,
  PROFILE_DETAIL_STOP_FETCHING,
  PROFILE_DETAIL_ERROR,
  PROFILE_DETAIL_SET_DETAIL
} from './profile-detail.constants'
import { fetchProfileDetailApi } from './profile-detail.api'

export const startFetching = () => ({
  type: PROFILE_DETAIL_START_FETCHING
})

export const stopFetching = () => ({
  type: PROFILE_DETAIL_STOP_FETCHING
})

export const setProfileDetail = data => ({
  type: PROFILE_DETAIL_SET_DETAIL,
  payload: data
})

export const profileDetailError = errorMessage => ({
  type: PROFILE_DETAIL_ERROR,
  payload: errorMessage
})

export const fetchProfileDetailAsync = () => async dispatch => {
  dispatch(startFetching())
  try {
    const response = await fetchProfileDetailApi()
    if ('success' in response && response.success === false) {
      dispatch(profileDetailError(response.error))
    } else {
      dispatch(setProfileDetail(response))
    }
  } catch (e) {
    dispatch(profileDetailError(e.message))
  } finally {
    dispatch(stopFetching())
  }
}