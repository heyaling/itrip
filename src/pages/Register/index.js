import React from 'react'
import { Form, Input, Checkbox, Button, message, Modal, Row, Col } from 'antd'
import { hashHistory } from 'react-router'
import { postRequest, getRequest, putRequest } from 'common/js/fetch'
import { registerUrl, activateEmailUrl, ckusrUrl} from 'constants/url'
import LoginFooter from 'components/Footer/LoginFooter.js'
import './style.css'
import loginLogo from './imgs/i-LOGO-02-01.png'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    span: 16,
    offset: 4
  }
}

function requestError (err) {
  if (err.msg || err.message) {
    Modal.error({
      title: '错误提示：',
      content: err.msg || err.message
    })
    return
  }
  console.log(err)
}

class Register extends React.Component {
  state = {
    visible: false,
    confirmDirty: false,
    inputCode: ''
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });

    putRequest(activateEmailUrl, {
      user: this.state.user,
      code: this.state.inputCode
    }).then(data => {
      this.setState({
        visible: false,
        confirmLoading: false,
        user: '',
        code: ''
      });

      Modal.success({
        title: '提示',
        content: '帐号激活成功',
        okText: '去登录',
        onOk() {
          hashHistory.push('/login')
        }
      })
    }).catch(requestError)
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('userPassword')) {
      callback('再次密码不一致！');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) return
      
      delete values.confirm
      delete values.agreement

      postRequest(registerUrl).then(data => {
        message.success('还差一步，激活码已经发送到你邮箱，激活后帐号才可以使用哦！')
        this.setState({
          visible: true
        })
      }).catch(requestError)
    });
  }

  validatorEmail (rule, value, callback) {
    if (!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value)) {
      return callback('请输入正确的邮箱格式')
    }
    getRequest(ckusrUrl, {
      name: value
    }).then(data => {
      callback()
    }).catch(err => {
      callback(err.msg || err.message || '验证邮箱失败！')
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className='Register'>
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
                <Form className="fromTwo" onSubmit={this.handleSubmit}>
                  <FormItem
                    {...formItemLayout}
                    hasFeedback
                    label='注册邮箱'>
                      {getFieldDecorator('userCode', {
                        rules: [{
                          required: true,
                          message: '邮箱必须填写！'
                        }, {
                          validator: this.validatorEmail
                        }]
                      })(
                        <Input placeholder="请输入邮箱" />
                      )}
                  </FormItem>
                  <FormItem
                    hasFeedback
                    {...formItemLayout}
                    label='登录密码'>
                      {getFieldDecorator('userPassword', {
                        rules: [{
                          required: true, message: '密码必须填写!',
                        }, {
                          validator: this.checkConfirm,
                        }],
                      })(
                        <Input type="password" placeholder='请输入密码' />
                      )}
                  </FormItem>
                  <FormItem
                    hasFeedback
                    {...formItemLayout}
                    label='确认密码'>
                    {getFieldDecorator('confirm', {
                          rules: [{
                            required: true, message: '确认密码必须填写!',
                          }, {
                            validator: this.checkPassword,
                          }],
                        })(
                          <Input type="password" placeholder='请输入确认密码' onBlur={this.handleConfirmBlur} />
                        )}
                  </FormItem>
                  <FormItem {...tailFormItemLayout}>
                    <div className="i-reg-check">
                      {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                        initialValue: true
                      })(
                        <Checkbox />
                      )}
                      <label htmlFor="i-reg-info">
                        我已经阅读并同意遵守
                        <a className="agreement" href="javascript:;">《i旅行用户服务协议》</a>
                      </label>
                    </div>
                  </FormItem>
                  <FormItem {...tailFormItemLayout}>
                    <div className="i-reg-sub">
                      <Button size='large' className="submitTwo" type='primary' htmlType="submit">
                        同意协议并注册
                      </Button>
                      <Button size='large' onClick={this.showModal} style={{marginLeft: '1em'}}>激活已经有帐号</Button>
                    </div>
                  </FormItem>
                </Form>
              </div>
            </aside>
            <aside className="i-register-right" />
          </section>
        </div>
        <LoginFooter />

        <Modal title="激活帐号"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText="激活"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}>
          <Row type='flex' align='middle' justify='center' style={{marginBottom: '20px'}}>
            <Col span={20}>
              <Input value={this.state.user} onChange={e => this.setState({user: e.target.value})} placeholder='用户名' />
            </Col>
          </Row>
          <Row type='flex' align='middle' justify='center'>
            <Col span={20}>
              <Input value={this.state.inputCode} onChange={e => this.setState({inputCode: e.target.value})} placeholder='请输入激活码' />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(Register)
