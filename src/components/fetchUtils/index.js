

import React from 'react'

/* 请求发送 知道接口*/
let fetchRequest = function (params) {

  fetch(params.url, {
    method: params.type ? params.type : "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: params.type=="POST"?JSON.stringify(params.param):params.param
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(res => {
            params.callback(res);
          })
      }
    })

}
export default fetchRequest;

/* 获取业务数据接口*/
let fetchBiz = function (params) {
  // /biz/api
  params.url = "/biz/api" + params.url
  fetchRequest(params);
}
/* 获取验证或登录状态接口*/
let fetchAuth = function (params) {
  // auth/api
  params.url = "/auth/api" + params.url
  fetchRequest(params);
}
/* 根据参数获取查询数据接口*/
let fetchSearch = function (params) {
  // /search/api/
  params.url = "/search/api" + params.url
  fetchRequest(params);
}
export { fetchAuth, fetchBiz, fetchSearch };
