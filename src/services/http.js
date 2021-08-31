import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
})

http.interceptors.request.use(config => {
  const authToken = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)

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