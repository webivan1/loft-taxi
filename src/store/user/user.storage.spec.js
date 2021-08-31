import { userStorage } from './user.storage'

describe('User storage', () => {
  it('should return empty result', () => {
    expect(userStorage.getToken()).toBeNull()
  })

  it('should set and return token', () => {
    userStorage.setToken('test')
    expect(userStorage.getToken()).toBe('test')
  })

  it('should remove token', () => {
    expect(userStorage.getToken()).toBe('test')
    userStorage.removeToken()
    expect(userStorage.getToken()).toBeNull()
  })
})