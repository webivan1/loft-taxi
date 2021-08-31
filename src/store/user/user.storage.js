export const userStorage = {
  getToken() {
    return localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
  },
  setToken(token) {
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, token)
  },
  removeToken() {
    if (this.getToken()) {
      localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
    }
  }
}