import React from 'react'
import LoginFooter from 'components/Footer/LoginFooter.js'
import './style.css'

import loginLogo from './imgs/i-LOGO-02-01.png'



export default () => <div>
  <div className='LoginHeader'>
    <img src={loginLogo} alt="" />
    <div className="login_toolbox">
      <a className="login_username" href="login.html">登陆</a>
      |
        <a className="login_kefu" href="#">客服中心</a>
    </div>

  </div>

  <div className='registerContian'>
    <section>
      <aside className="i-register-left clearfix">
        <div className="i-reg-bottom">
          <form className="fromTwo" action>
            <div className="i_mobile i_mail">
              注册邮箱  <input name="mail" type="text" placeholder="请输入邮箱号码" /><span />
            </div>
            <div className="i_pwd">
              登陆密码  <input name="pwd" type="password" placeholder="请输入密码" /><span />
            </div>
            <div className="i_check">
              验证码  <input type="text" placeholder="请输入验证码" /><span />
              <div className="i_check_in" /><i className="idCode">换一张</i>
            </div>
            <div className="i_lives">
              激活码  <input type="text" placeholder="请输入激活码" /><a className='jihuo' href="#">获取激活码</a>
            </div>
            <div className="i-reg-check">
              <input id="i-reg-info" defaultChecked="checked" type="checkbox" />
              <label htmlFor="i-reg-info">
                我已经阅读并同意遵守
                  <a className="agreement" href="javascript:;">《i旅行用户服务协议》</a>
              </label>
            </div>
            <div className="i-reg-sub">
              <input className="submitTwo" type="submit" defaultValue="同意协议并注册" />
            </div>
          </form>
        </div>
      </aside>
      <aside className="i-register-right" />
    </section>

  </div>


  <LoginFooter />
</div>
