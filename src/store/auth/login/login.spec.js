import { loginReducer } from './login.reducer'
import { createStore, applyMiddleware } from 'redux'
import { error, loginAsync, success } from './login.actions'
import * as api from './login.api'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../../root.sagas'

describe('User reducer', () => {
  let store;

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(loginReducer, applyMiddleware(saga))
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
    store.dispatch(success())
    expect(store.getState().success).toBeTruthy()
  })

  it('action success - loginAsync', async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret'
    }
    const fn = jest.fn()
    jest.spyOn(api, 'loginUserApi').mockImplementationOnce(async fields => {
      fn(fields)
      return {
        success: true,
        token: 'token'
      }
    })
    await store.dispatch(loginAsync(data))
    expect(store.getState().loader).toBeFalsy()
    expect(fn).toHaveBeenCalledWith(data)
    expect(store.getState().success).toBeTruthy()
  })

  it('action error - loginAsync', async () => {
    const data = {
      password: 'secret'
    }
    const errorMessage = 'Test error message'
    jest.spyOn(api, 'loginUserApi').mockImplementationOnce(async () => ({
      success: false,
      error: errorMessage
    }))
    await store.dispatch(loginAsync(data))
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().success).toBeFalsy()
    expect(store.getState().error).toBe(errorMessage)
  })
})