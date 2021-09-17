import http from '../../services/http'

export const buildRouteApi = ({ start, finish, option }) => http.get(`/route?address1=${start}&address2=${finish}`)
  .then(({ data }) => data)