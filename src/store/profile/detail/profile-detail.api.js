import http from '../../../services/http'

export const fetchProfileDetailApi = () => http.get('/card')
  .then(({ data }) => data)