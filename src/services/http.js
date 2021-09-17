import axios from 'axios'
import { userStorage } from '../store/user/user.storage'

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
})

http.interceptors.request.use(config => {
  const authToken = userStorage.getToken()

  if (authToken) {
    if (config.method === 'post' || config.method === 'put') {
      config.data.token = authToken
    } else if (config.url.indexOf('?') === -1) {
      config.url = config.url + `?token=${authToken}`
    }
  }

  return config
})

export default http