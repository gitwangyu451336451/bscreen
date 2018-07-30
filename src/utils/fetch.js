import axios from 'axios'
import store from '../store/index'
const server = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})
server.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = store.getters.token
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
export default server
