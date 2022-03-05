import {api} from '../../api';


export function postProduct(payload) {
  return async function(dispatch) {
    const response = await api.post(`/`, payload)
    return response
  }
}

export function editProduct(payload){
  return async function(dispatch) {
    const response = await api.put('/products', payload)
    return response
  }
}

export function getProducts(source) {
  return function(dispatch){
    return api.get(`/`)
    .then(json =>{
      dispatch({type: 'GET_PRODUCTS', payload: json.data})
    })
  }
}
