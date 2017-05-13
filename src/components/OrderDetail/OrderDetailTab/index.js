import React from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import OrderDetailInfo from 'components/OrderDetail/OrderDetailInfo'
import OrderDetailStep from 'components/OrderDetail/OrderDetailStep'
import OrderDetailDynamic from 'components/OrderDetail/OrderDetailDynamic'
import OrderDetailIntoRoom from 'components/OrderDetail/OrderDetailIntoRoom'

import './style.css'

function callback(key) {
  console.log(key);
}


export default class OrderDetailTab extends React.Component {
  render() {
        return (
            <Tabs defaultActiveKey="2" onChange={callback}>
                <TabPane tab="订单信息" key="1">
                    <OrderDetailInfo />
                    <OrderDetailStep />
                    <OrderDetailDynamic />
                </TabPane>
                <TabPane tab="入住信息" key="2">
                    <OrderDetailIntoRoom />
                </TabPane>
                <TabPane tab="联系信息" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
  }
}
