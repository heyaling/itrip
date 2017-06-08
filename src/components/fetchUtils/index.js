

import React from 'react'

/* 请求发送 知道接口*/
let fetchRequest = function (params) {
  
  fetch(params.url, {
    method: params.type ? params.type : "GET",
    mode: "cors",
    headers: {
      "Content-Type": params.ContentType || "application/json",
      'token': 'token:PC-212342343242343242334324bc36809d8-8-20170525093442-4f6496'
    },
    body: params.type == "POST" ? JSON.stringify(params.param) : params.param
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
/* name 参数显示名称*/
//name 参数显示名称
let getUrlParam = (name)=>{
  var reg = new RegExp(name + "=([^&]*)(&|$)");
  var r = window.location.hash.match(reg);
  if (r != null) return unescape(r[1]); return null;
}







export { fetchAuth, fetchBiz, fetchSearch, getUrlParam };
