import React from 'react'
import LoginFooter from 'components/Footer/LoginFooter.js'
import './style.css'

import loginLogo from './imgs/i-LOGO-02-01.png'
import LeftPhone from './imgs/left-phone.png'
import yanzhengma from './imgs/yanzhengma.png'
import iconsina from './imgs/icon-sina.png'
import iconQQ from './imgs/icon-QQ.png'
import iconWechat from './imgs/icon-Wechat.png'
import iconBaidu from './imgs/icon-Baidu.png'


export default () => <div>
  <div className='LoginHeader'>
    <h1>
      <img src={loginLogo} alt="" />
    </h1>
  </div>
  <div className='LoginContain'>
    <section>
      <div className="left-phone">
        <img src={LeftPhone} />
      </div>
      <div className="right-message">
        使用<img src={loginLogo} />客户端<br />
        手机扫描安全登陆
        </div>
      <div className="right-message gray">
        1. 打开手机i旅行客户端并登陆i旅行账号<br />
        2. 在i旅行登陆页点击右上角扫码安全登陆<br />
        3. 使用i旅行客户端左上角扫描功能完成登陆<br />
      </div>
    </section>
    <aside>
      <div className="login-header">
        <div>
          <span>会员登陆</span>&nbsp;<a href="register.html"> 立即注册</a>，享积分换礼、返现等专属优惠！
          </div>
        <span className="right-erweima " />
      </div>
      <div className="login-body">
        <div id="staticOption">
          <form className="form-horizontal">
            <fieldset>

              <div className="form-group margin-left-100">
                <div className="input-group input-group-sm col-sm-9">
                  <span className="input-group-addon"><i className="icon-user" /></span>
                  <input type="text" id="username" className="form-control ie-input" placeholder="请输入注册邮箱" />
                </div>
              </div>
              <div className="form-group margin-left-100">
                <div className="input-group input-group-sm col-sm-9">
                  <span className="input-group-addon"><i className="icon-lock" /></span>
                  <input type="password" id="password" className="form-control ie-input" placeholder="请输入密码" />
                </div>
              </div>
              <div id="staticPass" className="form-group margin-left-89">
                <div className="controls input-group-sm col-sm-2 ">
                  <input type="text" id="loginCode" className="form-control ie-input" placeholder="验证码" />
                  <p className="help-block" />
                </div>
                <div className="controls  input-group-sm col-sm-5">
                  <img src={yanzhengma} width="165px" />
                </div>
                <div className="controls  col-sm-2 margin-bt-b30">
                  <label>换一张</label>
                </div>
              </div>
              <div className="form-group margin-left-100 ">
                <div className="controls  col-sm-5">
                  <label className="checkbox inline">
                    <input type="checkbox" className="ie-input-button" defaultValue="30天内自动登陆" />
                    30天内自动登陆
                    </label>
                </div>
                <div className="controls  col-sm-4">
                  <label className="checkbox inline">
                    忘记密码?
                    </label>
                </div>
              </div>
            
            </fieldset>
          </form>
          <button className="btn btn-danger " id="login">登陆</button>
        </div>
        {/*<div id="actionOption" style={{ display: 'none' }}>
          <div class="phone-erweima"></div>
          <img src="./images/img/phone-erwema.png" className="phone-erweima" />
          <img src="./images/img/richScan.png" className="phone-richScan" />
          <img src="./images/img/erweima_1126.jpg" style={{ width: 350 }} />
        </div>*/}
      </div>

      <div className="login-footer">
        <div className="footer-message">
          您也可以用合作网站的帐号登陆去i旅行网
          </div>
        <div className="footer-label">
          <a><img src={iconsina} /> 新浪微博</a>
          <a><img src={iconQQ} />QQ</a>
          <a><img src={iconWechat} />微信</a>
          <a><img src={iconBaidu} />百度</a>
        </div>
      </div>
    </aside>

  </div>
  <LoginFooter />
</div>
