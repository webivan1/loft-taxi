import http from '../../services/http'

export const addressListApi = () => http.get('/addressList')
  .then(({ data }) => data)