import { stringify } from 'querystring'
import Cookie from 'js-cookie'

function request(url, op = {}) {
  const config = {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const token = Cookie.get('token')
  if (token) {
    config.headers['token'] = token
  }

  return fetch(url, { ...config, ...op })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.errorCode === '302') {
        window.location.href = res.msg
        return {}
      }
      return res
    }).then(res => {
      if (res.success !== 'true') return Promise.reject(res)
      return res
    })
}

export function getRequest(url, params, op) {
  if (params && typeof params === 'object') {
    return request(url + '?' + stringify(params), op)
  }
  return request(url, op)
}

export function postRequest(url, params, op = {}) {
  return request(url, {
    ...op,
    method: 'POST',
    body: JSON.stringify(params)
  })
}



export function putRequest(url, params, op = {}) {
  if (params && typeof params === 'object') {
    return request(url + '?' + stringify(params), { method: 'PUT', ...op })
  }
  return request(url,
    {
      ...op,
      method: 'PUT'
    })
}

export function postRequestForm(url, params, op = {}) {
  const formData = new FormData()
  if (params && typeof params === 'object') {
    const keys = Object.keys(params)
    keys.forEach(key => formData.append(key, params[key]))
  }
  return request(url, {
    ...op,
    method: 'POST',
    headers: {}
  })
}
