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
    .then(data => {
      if (data.errorCode === '302') {
        window.location.href = data.msg
      }
      return data
    })
}

export function getRequest(url, params) {
  return request(url + '?' + stringify(params))
}

export function postRequest(url, params) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(params)
  })
}
