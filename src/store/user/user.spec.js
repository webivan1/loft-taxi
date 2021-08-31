import { userReducer } from './user.reducer'
import { createStore } from 'redux'
import { addUser, logout } from './user.actions'

describe('User reducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(userReducer)
  })

  it('action - addUser', () => {
    expect(store.getState().isLoggedIn).toBeFalsy()
    expect(store.getState().token).toBeNull()
    store.dispatch(addUser('test'))
    expect(store.getState().isLoggedIn).toBeTruthy()
    expect(store.getState().token).toBe('test')
  })

  it('action - logout', () => {
    store.dispatch(addUser('test'))
    store.dispatch(logout())
    expect(store.getState().isLoggedIn).toBeFalsy()
    expect(store.getState().token).toBeNull()
  })
})