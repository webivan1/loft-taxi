import http from '../../../services/http'

export const fetchPaymentDetailApi = () => http.get('/card')
  .then(({ data }) => data)