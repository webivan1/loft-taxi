import { addressReducer } from './address.reducer'
import { createStore, applyMiddleware } from 'redux'
import { error, fetchAddresses, success } from './address.actions'
import * as api from './address.api'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../root.sagas'

describe('Address reducer', () => {
  let store;
  const fakeAddresses = ['test', 'test 1', 'test 2']

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(addressReducer, applyMiddleware(saga))
    saga.run(rootSaga)
  })

  it('action - error', () => {
    expect(store.getState().error).toBeNull()
    const message = 'Test error message'
    store.dispatch(error(message))
    expect(store.getState().error).toBe(message)
  })

  it('action - success', () => {
    expect(store.getState().success).toBeFalsy()
    store.dispatch(success(fakeAddresses))
    expect(store.getState().list).toEqual(fakeAddresses)
  })

  it('action success - fetchAddresses', async () => {
    jest.spyOn(api, 'addressListApi').mockImplementationOnce(async () => ({
      addresses: fakeAddresses
    }))
    await store.dispatch(fetchAddresses())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().list).toEqual(fakeAddresses)
  })

  it('action error - fetchAddresses', async () => {
    const errorMessage = 'Test error message'
    jest.spyOn(api, 'addressListApi').mockImplementationOnce(async () => ({
      success: false,
      error: errorMessage
    }))
    await store.dispatch(fetchAddresses())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().list.length).toBe(0)
    expect(store.getState().error).toBe(errorMessage)
  })
})