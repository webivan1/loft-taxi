import { profileFormReducer } from './profile-form.reducer'
import { createStore, applyMiddleware } from 'redux'
import { actionAsyncMiddleware } from '../../middleware/actionAsyncMiddleware'
import * as api from './profile-form.api'
import { logout } from '../../user/user.actions'
import {
  startFetching,
  stopFetching,
  profileUpdated,
  profileFormError,
  updateProfileAsync, resetForm
} from './profile-form.actions'

describe('Profile form reducer', () => {
  let store

  beforeEach(() => {
    store = createStore(profileFormReducer, applyMiddleware(actionAsyncMiddleware))
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

  it('action - profileFormError', () => {
    expect(store.getState().error).toBeNull()
    store.dispatch(profileFormError('Error test'))
    expect(store.getState().error).toBe('Error test')
  })

  it('action - profileUpdated', () => {
    expect(store.getState().success).toBeFalsy()
    store.dispatch(profileUpdated())
    expect(store.getState().success).toBeTruthy()
  })

  it('action - resetForm', () => {
    store.dispatch(profileUpdated())
    expect(store.getState().success).toBeTruthy()
    store.dispatch(resetForm())
    expect(store.getState().success).toBeFalsy()
  })

  it('action - updateProfileAsync, success', async () => {
    jest.spyOn(api, 'updateProfileApi').mockImplementationOnce(async () => ({
      success: true
    }))
    await store.dispatch(updateProfileAsync())
    expect(store.getState().success).toBeTruthy()
    expect(store.getState().error).toBeNull()
  })

  it('action - updateProfileAsync, fail', async () => {
    const response = {
      success: false,
      error: 'Error message'
    }
    jest.spyOn(api, 'updateProfileApi').mockImplementationOnce(async () => response)
    await store.dispatch(updateProfileAsync())
    expect(store.getState().success).toBeFalsy()
    expect(store.getState().error).toBe(response.error)
  })

  it('action - logout', async () => {
    jest.spyOn(api, 'updateProfileApi').mockImplementationOnce(async () => ({
      success: true
    }))
    await store.dispatch(updateProfileAsync())
    store.dispatch(logout())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().error).toBeNull()
    expect(store.getState().success).toBeFalsy()
  })
})