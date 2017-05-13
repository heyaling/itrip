import React from 'react'
import { Steps, Icon, Layout, Input, Checkbox, Radio, Form, DatePicker, Row, Col } from 'antd';
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
    sm: { span: 5 },
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
            <Content style={{ background: '#f2fcff' }}>
              <FormItem 
                {...formItemLayout}
                label="入离日期"
                hasFeedback >
                <RangePicker />
              </FormItem><br />
              <FormItem
                {...formItemLayout}
                label="入离日期"
                hasFeedback >
                <RangePicker />
              </FormItem><br />
              <FormItem
                {...formItemLayout}
                label="住客信息"
                hasFeedback >
                <Checkbox.Group   >
                    <Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox><Checkbox value="A">A</Checkbox>
                </Checkbox.Group>
              </FormItem>



            </Content>
          </Layout>
          <Layout style={{ height: 152, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>联系信息</Sider>
            <Content style={{ background: '#f2fcff' }}>
              <FormItem style={{ float: 'left', paddingTop: 10 }}
                {...formItemLayout}
                label="手机号码"
                hasFeedback
              >
                <Input style={{ marginLeft: 15, width: 150 }} placeholder='' id="warning" />
              </FormItem><br />
              <FormItem style={{ float: 'left', paddingTop: 10 }}
                {...formItemLayout}
                label="Email"
                hasFeedback
              >
                <Input style={{ marginLeft: 15, width: 150 }} placeholder='' id="warning" />
              </FormItem>
            </Content>
          </Layout>
          <Layout style={{ height: 132, textAlign: 'center', border: '1px solid #1ab2db', borderBottom: 0 }}>
            <Sider style={{ background: '#fff', padding: 20, }}>发票信息</Sider>
            <Content style={{ background: '#f2fcff', position: 'relative' }}>
              <Checkbox style={{ zIndex: 1 }}>需要发票</Checkbox>
              <span style={{ marginTop: '-30', fontSize: 14, color: '#ccc', fontWeight: 500, position: 'absolute', left: 20, top: 50 }}>可开具电子发票，纸质发票。订单成交后3个月内可补开。</span>
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
              <Input placeholder="选填" style={{ width: 200, height: 30 }} />
            </Content>
          </Layout>
          <Layout style={{ height: 74, border: '1px solid #1ab2db' }}>
            <Sider style={{ background: '#fff', textAlign: 'center', padding: 20, }}>酒店提示</Sider>
            <Content style={{ background: '#f2fcff' }}>为响应禁烟条例，保护您和他人的健康，酒店均为无烟房。   </Content>
          </Layout>
        </div>
      </div >
    )
  }
}
