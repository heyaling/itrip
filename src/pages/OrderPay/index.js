import React from 'react'
import { Steps, Icon, Layout, Input, Checkbox, Button,Select,Radio, Form, DatePicker, Row, Col } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import './index.css';
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
        
      </div >
    )
  }
}
