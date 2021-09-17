import http from '../../../services/http'

export const updatePaymentApi = fields => http.post('/card', fields)
  .then(({ data }) => data)