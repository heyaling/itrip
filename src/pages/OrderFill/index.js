import React from 'react'
import { Steps, Icon, Layout, Input, Checkbox, Button, Select, Radio, Form, DatePicker, Row, Col } from 'antd';
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import Modal from './modalPlugin.js'
import moment from 'moment';
import { fetchBiz, getUrlParam } from '../../components/fetchUtils'
// import stp from '../../components/OrderPage/'
const { Sider, Content } = Layout;
const Step = Steps.Step;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const dateFormat = 'YYYY-MM-DD';
export default class App extends React.Component {
  state = {
    visible: false,
    data: {
      title: '添加用户信息',
      url: 'http://baidu.com',
      type: 'add',//modfiy
      userMess: {
        userName: " 张三李四王五",
        phone: '18788988998',
        card: '10110220334044500'
      }
    },
    callback: (data) => {
      console.debug(data);
    },/*查询房间接口的参数信息数据*/
    param: {
      "checkInDate": "2017-05-25T05:44:11.555Z",
      "checkOutDate": "2017-05-25T05:44:11.555Z",
      "count": null,
      "hotelId": null,
      "roomId": null
    },/* 保存添加信息数据*/
    addParam: {
      "checkInDate": "2017-05-25T05:44:11.550Z",
      "checkOutDate": "2017-05-25T05:44:11.550Z",
      "count": 0,
      "hotelId": 0,
      "hotelName": "string",
      "invoiceHead": "string",
      "invoiceType": 0,
      "isNeedInvoice": 0,
      "linkUser": [
        {
          "id": 0,
          "linkUserName": "string",
        }
      ],
      "noticeEmail": "string",
      "noticePhone": "string",
      "orderType": 0,
      "roomId": 0,
      "specialRequirement": "string"
    },/*根据查询房间接口返回的数据信息*/
    backMess: {},
    /* 返回的联系人数据信息*/
    Linkman: []
  }
  /*改变状态中的参数信息*/
  changeSateParam = (data) => {
    if (data) {
      let stateParam = this.state.param;
      stateParam[data.key] = data.val;
      this.setState({
        param: stateParam
      })
    }
  }
  /*改变状态信息*/
  changeState = (data) => {
    var state = this.state;
    state[data.key] = data.val;
    this.setState(state);
  }
  showModal = () => {
    this.setState({
      visible: true,
      data: {
        title: '添加用户信息',
        url: 'http://baidu.com',
        type: 'add',//modfiy
        userMess: {
          userName: " 张三李四王五",
          phone: '18788988998',
          card: '10110220334044500'
        }
      },
      callback: (data) => {
        console.debug(data);
      }
    });
    if (!this.state.visible) {
      this.state.visible = true;
    }
  }
  changeEve = {
    changeTime: (e) => {
      alert(e);
    },
     changeRoomCount: (e) => {
      alert(e);
    },
    changeCheckBox: (e) => {
      alert(e);
    },
    changePhone: (e) => {
      alert(e.currentTarget.value);
    },
    changeEmail: (e) => {
      alert(e.currentTarget.value);
    },
    changeBill: (e) => {
      alert(e);
    },
    changeBillMessage: (e) => {
      alert(e.currentTarget.value);
    },
    changeSpecialSver: (e) => {
      alert(e.currentTarget.value);
    }
  }
  /*获得初始化对象信息*/
  constructor(props) {
    super(props);
    var param = {
      "checkInDate": "2017-05-25T05:44:11.555Z",
      "checkOutDate": "2017-05-25T05:44:11.555Z",
      "count": 1,
      "hotelId": null,
      "roomId": null
    }
    param["hotelId"] = getUrlParam("hotel");
    param["roomId"] = getUrlParam("room");
    param["checkInDate"] = new Date(getUrlParam("startDate"));
    param["checkOutDate"] = new Date(getUrlParam("endDate"));
    this.changeState({ key: "param", val: param })
  }
  componentWillMount() {

    fetchBiz({
      url: "/hotelorder/getpreorderinfo",
      type: "POST",
      param: this.state.param,
      callback: e => {
        this.setState({
          backMess: e.data
        })
      }
    })

    fetchBiz({
      url: "/userinfo/queryuserlinkuser",
      type: "POST",
      param: this.state.param,
      callback: e => {
        this.setState({
          Linkman: e.data
        })
      }
    })
  }
  render() {
    let option = []
    for (var i = 1; i <= this.state.backMess.store; i++) {
      option.push(<Select.Option key={i}>{i}</Select.Option>)
    }
    return (
      <div className="order order-fill" >
        <Steps current={0}  >
          <Step title="填写" />
          <Step title="支付" />
          <Step title="成功" />
        </Steps>
        <div width={200} height={30} style={{ fontSize: 30, color: '#1448ad' }}>
          <h1>三亚喜来登度假酒店</h1>
        </div>
        <div className="headerMessage">
          <ul>
            <li><Icon type="credit-card" /><span>仅需2分钟即可轻松完成预订</span></li>
            <li><Icon type="clock-circle" /><span>房源紧张！请尽快预订</span></li>
          </ul>
        </div>
        <div className="order-message">
          <Form onSubmit={this.handleSubmit}>
            <Layout style={{ height: 240, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>订单信息</Sider>
              <Content style={{ background: '#f2fcff', paddingTop: 20 }}>
                <FormItem
                  {...formItemLayout}
                  label="入离日期"
                  help="入住时间不能小于当前时间！ 离开时间必须大于入住时间！" >
                  <RangePicker onChange={this.changeEve.changeTime} defaultValue={[moment(this.state.param.checkInDate, dateFormat),
                  moment(this.state.param.checkOutDate, dateFormat)]} format={dateFormat} />
                </FormItem><br />
                <FormItem
                  {...formItemLayout}
                  label="房间数量">
                  <Select defaultValue="1" onChange={this.changeEve.changeRoomCount} style={{ width: 120 }}  >
                    {
                      option
                    }
                  </Select>
                  <a href="" style={{ marginLeft: 20 }}>房费￥{
                    this.state.backMess.price
                  }</a><span style={{ marginLeft: 20, color: 'red', fontSize: 18 }}>仅剩{
                    this.state.backMess.store
                  }间</span>
                </FormItem> <br />
                <FormItem
                  {...formItemLayout}
                  label="住客信息"
                  help="每间房间最多允许居住3人！"
                >
                  <Checkbox.Group   >
                    {
                      this.state.Linkman.map((val) => {
                        return <Checkbox value={val.id}>{val.linkUserName}</Checkbox>
                      })
                    }
                    <Button type="primary" onClick={this.showModal.bind(this)}>添加用户</Button>
                  </Checkbox.Group>
                  <Modal data={this.state} ></Modal>
                </FormItem>
              </Content>
            </Layout>
            <Layout style={{ height: 180, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>联系信息</Sider>
              <Content style={{ background: '#f2fcff', textAlign: 'left', paddingTop: 20 }}>
                <FormItem
                  {...formItemLayout}
                  label="手机号码"
                  validateStatus="error"
                  help="请输入正确的手机号！"
                >
                  <Input addonBefore="+86" onBlur={this.changeEve.changePhone} style={{ width: 235 }} placeholder='' id="warning" />
                </FormItem><br />
                <FormItem
                  {...formItemLayout}
                  label="Email"
                  validateStatus="error"
                  help="请输入正确的邮箱信息！"
                >
                  <Input style={{ width: 270 }} onBlur={this.changeEve.changeEmail}  placeholder='' id="warning" />
                </FormItem>
              </Content>
            </Layout>
            <Layout style={{ height: 132, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>发票信息</Sider>
              <Content style={{ background: '#f2fcff', position: 'relative' }}>
                <Checkbox  onChange={this.changeEve.changeBill} style={{ marginTop: '30', position: 'absolute', left: 20, top: 0 }}>需要发票</Checkbox>
                <span style={{ marginTop: '60', fontSize: 14, color: '#ccc', fontWeight: 500, position: 'absolute', left: 20, top: 0 }}>可开具电子发票，纸质发票。订单成交后3个月内可补开。</span>
                <br />
                <RadioGroup defaultValue={1} style={{ position: 'absolute', left: 20, bottom: 0 }}> {/*onChange={this.onChange} value={this.state.value}*/}
                  <Radio value={1}>个人</Radio>
                  <Radio value={2}>单位:<Input onBlur={this.changeEve.changeBillMessage} placeholder="选填" 
                  style={{ width: 200, height: 30 }} /></Radio>
                </RadioGroup>
              </Content>
            </Layout>
            <Layout style={{ height: 92, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
              <Sider style={{ background: '#fff', padding: 20, }}>特殊服务</Sider>
              <Content style={{ background: '#f2fcff' }}>
                <Input placeholder="选填" onBlur={this.changeEve.changeSpecialSver}  style={{ width: 200, height: 30, marginTop: 30, marginLeft: 30 }} />
              </Content>
            </Layout>
            <Layout style={{ height: 74, border: '1px solid #1ab2db' }}>
              <Sider style={{ background: '#fff', textAlign: 'center', padding: 20, }}>酒店提示</Sider>
              <Content className="last-content" style={{ background: '#f2fcff', lineHeight: 5 }}>为响应禁烟条例，保护您和他人的健康，酒店均为无烟房。   </Content>
            </Layout>
          </Form>
        </div>
        <div className="order-footer">
          <ul>
            <li>
              <Icon type="exclamation-circle" />
              <strong>订单确认时长：</strong>此为向代理商申请的特殊价格，并在2017-05-01 16:50前 提供预订结果，请您耐心等待，到达酒店前台后请
            </li>
            <li>
              <Icon type="exclamation-circle" />
              <strong>取消修改说明：</strong>i旅行会根据您的付款方式进行预授权或扣除房费，如订单不确认讲解除预授权或全额退款至您的付款账户。该订单 确认后不
            </li>
          </ul>
        </div>
        <div className="order-button" style={{ height: 50, padding: 10 }}>
          <div style={{ float: 'left', display: 'inline-block' }}><a href="" style={{ color: '#1ab2db', fontSize: 14, marginTop: 3, fontWeight: 900 }}>&lt; 重现选择</a></div>
          <div style={{ float: 'right', display: 'inline-block' }}> <Button type="danger">下一步，支付</Button></div>
          <div></div>
        </div>
      </div >
    )
  }
}
