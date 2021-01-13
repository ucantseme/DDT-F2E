import axios from 'axios'
export const getOrderList = () => {
  return axios.get('http://127.0.0.1:3000/order/list')
}
