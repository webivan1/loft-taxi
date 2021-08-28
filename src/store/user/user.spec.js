import { userReducer } from './user.reducer'
import { createStore, applyMiddleware } from 'redux'
import { addUser, setUserWithToken, logout } from './user.actions'
import { actionAsyncMiddleware } from '../middleware/actionAsyncMiddleware'
import { userStorage } from './user.storage'

describe('User reducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(userReducer, applyMiddleware(actionAsyncMiddleware))
  })

  it('action - addUser', () => {
    expect(store.getState().isLoggedIn).toBeFalsy()
    expect(store.getState().token).toBeNull()
    store.dispatch(addUser('test'))
    expect(store.getState().isLoggedIn).toBeTruthy()
    expect(store.getState().token).toBe('test')
  })

  it('action - setUserWithToken', () => {
    store.dispatch(setUserWithToken('test 2'))
    expect(store.getState().isLoggedIn).toBeTruthy()
    expect(store.getState().token).toBe('test 2')
    expect(userStorage.getToken()).toBe('test 2')
  })

  it('action - logout', () => {
    store.dispatch(setUserWithToken('test'))
    store.dispatch(logout())
    expect(store.getState().isLoggedIn).toBeFalsy()
    expect(store.getState().token).toBeNull()
  })
})