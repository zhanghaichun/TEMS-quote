import Axios from 'axios'
import qs from 'qs'
// Axios.defaults.baseURL = 'http://192.168.0.6:8080'
// Axios.defaults.baseURL = 'http://localhost:8080'
Axios.defaults.baseURL = 'https://www.yueke51.com'
// TODO 设置超时时间
Axios.defaults.timeout = 20000

Axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
 // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  'Content-Type': 'application/json;charset=UTF-8'
}

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
  return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  return qs.stringify(params)
}

// TODO 设置POST等请求 body 序列化
Axios.defaults.transformRequest = [function (body) {
  let data = body || {}
  if (body instanceof window.FormData) {
    return body
  }
  return JSON.stringify(data)
}]

// TODO 设置统一请求拦截
Axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response.data)
  }

  if (response.status === 500 || response.status === 502) {
  }
  // account.interceptHttpCode(response.data.code)
  return Promise.reject(response.data)
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get (url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {params: params})
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post (url, body) {
  return new Promise((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  get, post
}
