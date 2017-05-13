import React from 'react'
import OrderDetailTab from 'components/OrderDetail/OrderDetailTab'
import './style.css'
//订单详情页面主页 调用组件情况
export default class OrderDetail extends React.Component {
  render() {
        return (
            <div className="orderdetail">
               <h3><a href="#">我的i旅游</a> > <a href="#">酒店订单</a> > 订单详情</h3>
               <OrderDetailTab />
            </div>
        )
  }
}
