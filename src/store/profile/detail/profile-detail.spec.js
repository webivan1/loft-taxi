import { profileDetailReducer } from './profile-detail.reducer'
import { createStore, applyMiddleware } from 'redux'
import { actionAsyncMiddleware } from '../../middleware/actionAsyncMiddleware'
import * as api from './profile-detail.api'
import { logout } from '../../user/user.actions'
import {
  startFetching,
  stopFetching,
  profileDetailError,
  setProfileDetail,
  fetchProfileDetailAsync
} from './profile-detail.actions'

describe('Profile detail reducer', () => {
  let store

  beforeEach(() => {
    store = createStore(profileDetailReducer, applyMiddleware(actionAsyncMiddleware))
  })

  it('action - startFetching', () => {
    expect(store.getState().loader).toBeFalsy()
    store.dispatch(startFetching())
    expect(store.getState().loader).toBeTruthy()
  })

  it('action - stopFetching', () => {
    store.dispatch(startFetching())
    expect(store.getState().loader).toBeTruthy()
    store.dispatch(stopFetching())
    expect(store.getState().loader).toBeFalsy()
  })

  it('action - profileDetailError', () => {
    expect(store.getState().error).toBeNull()
    store.dispatch(profileDetailError('Error test'))
    expect(store.getState().error).toBe('Error test')
  })

  it('action - setProfileDetail', () => {
    const detail = {
      id: '1',
      card: '2222 1111 1111 2222'
    }
    expect(store.getState().detail).toBeNull()
    store.dispatch(setProfileDetail(detail))
    expect(store.getState().detail).toBe(detail)
  })

  it('action - fetchProfileDetailAsync, success', async () => {
    const response = {
      id: '2',
      card: '1111 1111 1111 1111'
    }
    jest.spyOn(api, 'fetchProfileDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchProfileDetailAsync())
    expect(store.getState().detail).toBe(response)
    expect(store.getState().error).toBeNull()
  })

  it('action - fetchProfileDetailAsync, fail', async () => {
    const response = {
      success: false,
      error: 'Error message'
    }
    jest.spyOn(api, 'fetchProfileDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchProfileDetailAsync())
    expect(store.getState().detail).toBeNull()
    expect(store.getState().error).toBe(response.error)
  })

  it('action - logout', async () => {
    const response = {
      id: '2',
      card: '1111 1111 1111 1111'
    }
    jest.spyOn(api, 'fetchProfileDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchProfileDetailAsync())
    store.dispatch(logout())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().error).toBeNull()
    expect(store.getState().detail).toBeNull()
  })
})