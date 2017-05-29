import React from 'react'
import { hashHistory } from 'react-router'
import { Modal } from 'antd'
import Cookie from 'js-cookie'
import { getRequest } from 'common/js/fetch'
import { logoutUrl } from 'constants/url'

function requestError(err) {
  if (err.msg || err.message) {
    Modal.error({
      title: '错误提示：',
      content: err.msg || err.message
    })
    return
  }
  console.log(err)
}

export default class Header extends React.Component {
  
 handleLogout = () => {
   getRequest(logoutUrl).then(data => {
     Cookie.remove('token')
     Cookie.remove('user')
     Cookie.remove('expTime')
     Modal.success({
       title: '提示：',
       content: data.msg || '退出成功',
       onOk: () => {
         window.location.reload()
       }
     })
   }).catch(requestError)
 }

  render() {
    const token = Cookie.get('token')
    const user = Cookie.get('user')
    
    return (
      <div>
        <div className="i-top clearfix">
          <div className="i-top-wrap">
            <div className="i-logo fl">
              <a href="#" title="i旅行">i旅行</a>
            </div>
            <div className="i-hotline fr">
              <ul>
                <li><a href="#">客服中心</a></li>
                <li>|</li>
                <li><a href="#">24小时热线：400-855-6666</a></li>
                <li className="i-top-phone">
                  <a href="#"><i className="icon-mobile-phone" /></a>
                  <div className="i-top-app i-top-appL">
                    <img src="images/img/erweima_1126.jpg" height={102} width={102} alt="" />
                    <p>手机扫码快速下载</p>
                    <p>App享受最多50% 优惠力度</p>
                  </div>
                </li>
                <li className="i-top-phone i-top-wei">
                  <a href="#"><i className="icon-comments" /></a>
                  <div className="i-top-app i-top-app-wei">
                    <img src="images/img/erweima_1126.jpg" height={102} width={102} alt="" />
                    <p>i旅行微信公众号: <a href="#">ilvxing</a></p>
                    <p>手机扫一扫，享受专属福利</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="i-nav clearfix">
          <div className="i-nav-wrap">
            <ul>
              <li><a href="../index.html" className><i className="icon-home" />首页</a></li>
              <li><a href="../travel/index.html" className="current"><i className="icon-globe" />旅游</a></li>
              <li className="current"><a href="./index.html"><i className="icon-hospital" />酒店</a></li>
              <li><a href="../flyTicket.html"><i className="icon-plane" />机票</a></li>
              <li><a href="#"><i className="icon-credit-card" />门票</a></li>
              <li><a href="../strategy/index.html"><i className="icon-book" />攻略</a></li>
            </ul>
            {
              !!token && !!user ?
                <div className="i-nav-login">
                  <span>欢迎您 {user}</span>
                  <span>|</span>
                  <a href="javascript:;" onClick={this.handleLogout}>退出</a>
                </div> :
                <div className="i-nav-login">
                  <a href="javascript:;" onClick={() => hashHistory.push('/login')}>登陆</a>
                  <span>|</span>
                  <a href="javascript:;" onClick={() => hashHistory.push('/register')}>注册</a>
                </div>
            }
            
          </div>
        </div>
      </div>
    )
  }
}
