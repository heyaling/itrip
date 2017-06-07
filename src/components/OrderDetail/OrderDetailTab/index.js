import React from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import OrderDetailInfo from 'components/OrderDetail/OrderDetailInfo'
import OrderDetailStep from 'components/OrderDetail/OrderDetailStep'
import OrderDetailDynamic from 'components/OrderDetail/OrderDetailDynamic'
import OrderDetailIntoRoom from 'components/OrderDetail/OrderDetailIntoRoom'
import OrderContactInfo from 'components/OrderDetail/OrderContactInfo'

import './style.css'

function callback(key) {
  console.log(key);
}


export default class OrderDetailTab extends React.Component {
  render() {
        return (
            <div className="orderdetailtabcc">
              <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="订单信息" key="1">
                      <OrderDetailInfo />
                      <OrderDetailStep />
                      <OrderDetailDynamic />
                  </TabPane>
                  <TabPane tab="入住信息" key="2">
                      <OrderDetailIntoRoom />
                  </TabPane>
                  <TabPane tab="联系信息" key="3">
                    <OrderContactInfo />
                  </TabPane>
              </Tabs>
            </div>
        )
  }
}
