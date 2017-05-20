import React from 'react'
import { Tabs } from 'antd';

import SearchOrder from 'components/OrderPage/SearchOrder'
import OrderListTable from 'components/OrderPage/OrderListTable'
import OrderListItem from 'components/OrderPage/OrderListItem'
const TabPane = Tabs.TabPane;
import './style.css'


/*订单页 Tab 切换 组件*/
export default class OrderTab extends React.Component {
  render() {
        return (
            <div className="card-container">
                <Tabs type="card">
                <TabPane tab="全部订单" key="1">
                    <SearchOrder />
                    {/*<OrderListTable />*/}
                    <OrderListItem />
                </TabPane>
                <TabPane tab="待出行" key="2">
                    <OrderListTable />
                </TabPane>
                <TabPane tab="待付款" key="3">
                    <OrderListTable />
                </TabPane>
                <TabPane tab="待评价" key="4">
                    <OrderListTable />
                </TabPane>
                <TabPane tab="取消订单" key="5">
                    <OrderListTable />
                </TabPane>
                </Tabs>
            </div>                                  
        )
  }
}
