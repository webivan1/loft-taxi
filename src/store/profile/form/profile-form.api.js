import http from '../../../services/http'

export const updateProfileApi = fields => http.post('/card', fields)
  .then(({ data }) => data)