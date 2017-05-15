import React from 'react'
import OrderLayout from 'components/OrderPage/OrderLayout'
import './style.css'
//订单页面主页 调用组件情况
export default class OrderPage extends React.Component {
  render() {
        return (
            <div className="order">
                <OrderLayout />
            </div>
        )
  }
}
