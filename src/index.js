import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from '././containers/App';
import List from '././pages/hotel/List';
import '././common/css/style.css'
=======
import { Router, hashHistory } from 'react-router'
import { changeToken } from 'common/js/ckman'
import routes from './router'
import 'common/css/style.css'
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "H+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
>>>>>>> 1f9ffd9e27239c51259eb8718603ce0e1e013028

/**
 * 重写toJSON方法
 * @returns {string}
 */
Date.prototype.toJSON = function () {
    var format = this.Format("yyyy-MM-dd HH:mm:ss");
    return (format.replace(" ", "T") + ".000Z");
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
ReactDOM.render(
<<<<<<< HEAD
  <App/>,
  document.getElementById('root')
=======
  <Router
    history={hashHistory}
    routes={routes} />,
  document.getElementById('root'),
  changeToken
>>>>>>> 1f9ffd9e27239c51259eb8718603ce0e1e013028
);
