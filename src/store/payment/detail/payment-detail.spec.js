import { paymentDetailReducer } from './payment-detail.reducer'
import { createStore, applyMiddleware } from 'redux'
import * as api from './payment-detail.api'
import { logout } from '../../user/user.actions'
import {
  paymentDetailError,
  setPaymentDetail,
  fetchPaymentDetailAsync
} from './payment-detail.actions'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../../root.sagas'

describe('Profile detail reducer', () => {
  let store

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(paymentDetailReducer, applyMiddleware(saga))
    saga.run(rootSaga)
  })

  it('action - paymentDetailError', () => {
    expect(store.getState().error).toBeNull()
    store.dispatch(paymentDetailError('Error test'))
    expect(store.getState().error).toBe('Error test')
  })

  it('action - setPaymentDetail', () => {
    const detail = {
      id: '1',
      card: '2222 1111 1111 2222'
    }
    expect(store.getState().detail).toBeNull()
    store.dispatch(setPaymentDetail(detail))
    expect(store.getState().detail).toBe(detail)
  })

  it('action - fetchPaymentDetailAsync, success', async () => {
    const response = {
      id: '2',
      card: '1111 1111 1111 1111'
    }
    jest.spyOn(api, 'fetchPaymentDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchPaymentDetailAsync())
    expect(store.getState().detail).toBe(response)
    expect(store.getState().error).toBeNull()
  })

  it('action - fetchPaymentDetailAsync, fail', async () => {
    const response = {
      success: false,
      error: 'Error message'
    }
    jest.spyOn(api, 'fetchPaymentDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchPaymentDetailAsync())
    expect(store.getState().detail).toBeNull()
    expect(store.getState().error).toBe(response.error)
  })

  it('action - logout', async () => {
    const response = {
      id: '2',
      card: '1111 1111 1111 1111'
    }
    jest.spyOn(api, 'fetchPaymentDetailApi').mockImplementationOnce(async () => response)
    await store.dispatch(fetchPaymentDetailAsync())
    store.dispatch(logout())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().error).toBeNull()
    expect(store.getState().detail).toBeNull()
  })
})