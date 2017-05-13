import React from 'react'
import { Steps, Icon, Layout, Input, Checkbox, Button,Select,Radio, Form, DatePicker, Row, Col } from 'antd';
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
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
export default class App extends React.Component {
  render() {
    return (
      <div className="order" >
        <Steps current={1}  >
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
          <Layout style={{ height: 240, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>订单信息</Sider>
            <Content style={{ background: '#f2fcff', paddingTop: 20 }}>
              <FormItem
                {...formItemLayout}
                label="入离日期"
                hasFeedback >
                <RangePicker />
              </FormItem><br />
              <FormItem
                {...formItemLayout}
                label="房间数量"
                hasFeedback >
                <Select defaultValue="lucy" style={{ width: 120 }}  >
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="disabled" disabled>Disabled</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
                <a href="" style={{marginLeft:20}}>房费￥1029</a><span style={{marginLeft:20,color:'red',fontSize:18}}>仅剩5间</span>
              </FormItem> <br />
              <FormItem
                {...formItemLayout}
                label="住客信息"
                hasFeedback >
                <Checkbox.Group   >
                  <Checkbox value="A">A</Checkbox>
                  <Checkbox value="b">A123</Checkbox>
                  <Checkbox value="c">A123</Checkbox>
                  <Checkbox value="d">A32</Checkbox>
                  <Checkbox value="e">A231</Checkbox>
                  <Checkbox value="f">A3212</Checkbox>
                  <Checkbox value="g">A1231</Checkbox>
                  <Checkbox value="h">A123123</Checkbox>
                <Button type="primary">添加用户</Button>
                </Checkbox.Group>
              </FormItem>
            </Content>
          </Layout>
          <Layout style={{ height: 152, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>联系信息</Sider>
            <Content style={{ background: '#f2fcff', textAlign: 'left',paddingTop:20 }}>
              <FormItem
                {...formItemLayout}
                label="手机号码"
                hasFeedback
              >
                <Input addonBefore="中国大陆（+86）" style={{ marginLeft: 15, width: 150 }} placeholder='' id="warning" />
              </FormItem><br />
              <FormItem
                {...formItemLayout}
                label="Email"
                hasFeedback
              >
                <Input style={{ width: 270 }} placeholder='' id="warning" />
              </FormItem>
            </Content>
          </Layout>
          <Layout style={{ height: 132, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>发票信息</Sider>
            <Content style={{ background: '#f2fcff', position: 'relative' }}>
              <Checkbox style={{ marginTop: '30', position: 'absolute', left: 20, top: 0 }}>需要发票</Checkbox>
              <span style={{ marginTop: '60', fontSize: 14, color: '#ccc', fontWeight: 500, position: 'absolute', left: 20, top: 0 }}>可开具电子发票，纸质发票。订单成交后3个月内可补开。</span>
              <br />
              <RadioGroup style={{ position: 'absolute', left: 20, bottom: 0 }}> {/*onChange={this.onChange} value={this.state.value}*/}
                <Radio value={1}>个人</Radio>
                <Radio value={2}>单位:<Input placeholder="选填" style={{ width: 200, height: 30 }} /></Radio>
              </RadioGroup>
            </Content>
          </Layout>
          <Layout style={{ height: 92, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>特殊服务</Sider>
            <Content style={{ background: '#f2fcff' }}>
              <Input placeholder="选填" style={{ width: 200, height: 30, marginTop: 30, marginLeft: 30 }} />
            </Content>
          </Layout>
          <Layout style={{ height: 74, border: '1px solid #1ab2db' }}>
            <Sider style={{ background: '#fff', textAlign: 'center', padding: 20, }}>酒店提示</Sider>
            <Content className="last-content" style={{ background: '#f2fcff', lineHeight: 5 }}>为响应禁烟条例，保护您和他人的健康，酒店均为无烟房。   </Content>
          </Layout>
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
        <div className="order-button" style={{height:50,padding:10}}>
          <div style={{float:'left',display:'inline-block'}}><a href="" style={{color:'#1ab2db',fontSize:14,marginTop:3,fontWeight:900}}>&lt; 重现选择</a></div>
          <div style={{float:'right',display:'inline-block'}}> <Button type="danger">下一步，支付</Button></div>
          <div></div>
        </div>
      </div >
    )
  }
}
