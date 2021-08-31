import http from '../../../services/http'

export const registerUserApi = fields => http.post('/register', { ...fields, surname: fields.name })
  .then(({ data }) => data)