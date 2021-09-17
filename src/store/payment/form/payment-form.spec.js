import { paymentFormReducer } from './payment-form.reducer'
import { createStore, applyMiddleware } from 'redux'
import * as api from './payment-form.api'
import { logout } from '../../user/user.actions'
import {
  paymentUpdated,
  paymentFormError,
  updatePaymentAsync,
  resetForm
} from './payment-form.actions'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../../root.sagas'

describe('Profile form reducer', () => {
  let store

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(paymentFormReducer, applyMiddleware(saga))
    saga.run(rootSaga)
  })

  it('action - paymentFormError', () => {
    expect(store.getState().error).toBeNull()
    store.dispatch(paymentFormError('Error test'))
    expect(store.getState().error).toBe('Error test')
  })

  it('action - paymentUpdated', () => {
    expect(store.getState().success).toBeFalsy()
    store.dispatch(paymentUpdated())
    expect(store.getState().success).toBeTruthy()
  })

  it('action - resetForm', () => {
    store.dispatch(paymentUpdated())
    expect(store.getState().success).toBeTruthy()
    store.dispatch(resetForm())
    expect(store.getState().success).toBeFalsy()
  })

  it('action - updatePaymentAsync, success', async () => {
    jest.spyOn(api, 'updatePaymentApi').mockImplementationOnce(async () => ({
      success: true
    }))
    await store.dispatch(updatePaymentAsync())
    expect(store.getState().success).toBeTruthy()
    expect(store.getState().error).toBeNull()
  })

  it('action - updatePaymentAsync, fail', async () => {
    const response = {
      success: false,
      error: 'Error message'
    }
    jest.spyOn(api, 'updatePaymentApi').mockImplementationOnce(async () => response)
    await store.dispatch(updatePaymentAsync())
    expect(store.getState().success).toBeFalsy()
    expect(store.getState().error).toBe(response.error)
  })

  it('action - logout', async () => {
    jest.spyOn(api, 'updatePaymentApi').mockImplementationOnce(async () => ({
      success: true
    }))
    await store.dispatch(updatePaymentAsync())
    store.dispatch(logout())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().error).toBeNull()
    expect(store.getState().success).toBeFalsy()
  })
})