import { stringify } from 'querystring'

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
    method: 'POST',
    body: JSON.stringify(params),
    ...op
  })
}

export function putRequest(url, params, op = {}) {
  if (params && typeof params === 'object') {
    return request(url + '?' + stringify(params), op)
  }

  return request(url, {
    method: 'PUT',
    ...op
  })
}