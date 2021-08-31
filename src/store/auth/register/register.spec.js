import { registerReducer } from './register.reducer'
import { applyMiddleware, createStore } from 'redux'
import { error, addUserAsync, success } from './register.actions'
import * as api from './register.api'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../../root.sagas'

describe('Register reducer', () => {
  let store;

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(registerReducer, applyMiddleware(saga))
    saga.run(rootSaga)
  })

  it('action - error', () => {
    expect(store.getState().error).toBeNull()
    const message = 'Test error message'
    store.dispatch(error(message))
    expect(store.getState().error).toBe(message)
  })

  it('action - success', () => {
    expect(store.getState().success).toBeNull()
    store.dispatch(success('Success'))
    expect(store.getState().success).toBe('Success')
  })

  it('action success - addUserAsync', async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret',
      name: 'Test'
    }
    const fn = jest.fn()
    jest.spyOn(api, 'registerUserApi').mockImplementationOnce(async fields => {
      fn(fields)
      return {
        success: true,
        token: 'token'
      }
    })
    await store.dispatch(addUserAsync(data))
    expect(store.getState().loader).toBeFalsy()
    expect(fn).toHaveBeenCalledWith(data)
    expect(store.getState().success).toBe('You have created account successfully')
  })

  it('action error - addUserAsync', async () => {
    const data = {
      password: 'secret',
      name: 'Test'
    }
    const errorMessage = 'Test error message'
    jest.spyOn(api, 'registerUserApi').mockImplementationOnce(async () => ({
      success: false,
      error: errorMessage
    }))
    await store.dispatch(addUserAsync(data))
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().success).toBeNull()
    expect(store.getState().error).toBe(errorMessage)
  })
})