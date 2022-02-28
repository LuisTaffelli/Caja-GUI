import {api} from '../../api';


export function postProduct(payload) {
  return async function(dispatch) {
    const response = await api.post(`/`, payload)
    return response
  }
}
