import http from '../../../services/http'

export const loginUserApi = fields => http.post('/auth', fields)
  .then(({ data }) => data)