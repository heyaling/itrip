

import React from 'react'
let fetchRequest = function (params) {

  fetch(params.url, {
    method: params.type ? params.type : "GET",
    mode: "cors",
    dataType: "jsonp",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.param
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
let fetchBiz = function (params) {
  // /biz/api
  params.url = "/biz/api" + params.url
  fetchRequest(params);
}
let fetchAuth = function (params) {
  // auth/api
  params.url = "/auth/api" + params.url
  fetchRequest(params);
}
let fetchSearch = function (params) {
  // /search/api/
  params.url = "/search/api" + params.url
  fetchRequest(params);
}
export { fetchAuth, fetchBiz, fetchSearch };
