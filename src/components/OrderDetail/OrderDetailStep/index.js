import React from 'react'
import { Steps } from 'antd';
const Step = Steps.Step;
import './style.css'


export default class OrderDetailStep extends React.Component {
  render() {
        return (
                 <div className="orderdetailstep">
                  <Steps current={2}>
                      <Step title="订单提交" />
                      <Step title="酒店确认" />
                      <Step title="未入住" />
                      <Step title="未成交" />
                  </Steps>
                 </div>
            )
        }
    }
