import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import LoginFooter from 'components/Footer/LoginFooter.js'
import './style.css'
const FormItem = Form.Item;

import loginLogo from './imgs/i-LOGO-02-01.png'
import LeftPhone from './imgs/left-phone.png'
import yanzhengma from './imgs/yanzhengma.png'
import iconsina from './imgs/icon-sina.png'
import iconQQ from './imgs/icon-QQ.png'
import iconWechat from './imgs/icon-Wechat.png'
import iconBaidu from './imgs/icon-Baidu.png'


class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
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
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem >
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入注册邮箱' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入注册邮箱" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                      )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>30天内自动登陆</Checkbox>
                      )}
                    <a className="login-form-forgot" href="">忘记密码?</a>

                    <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                    
                  </FormItem>
                </Form>
              </div>
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
    );
  }
}

export default Form.create()(Login)




