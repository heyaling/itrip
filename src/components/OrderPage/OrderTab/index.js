import React from 'react'
import { Tabs } from 'antd';

import SearchOrder from 'components/OrderPage/SearchOrder'
import OrderListTable from 'components/OrderPage/OrderListTable'
import OrderListItem from 'components/OrderPage/OrderListItem'
import { fetchBiz } from 'components/fetchUtils'

const TabPane = Tabs.TabPane;
import './style.css'


/*订单页 Tab 切换 组件*/
export default class OrderTab extends React.Component {
  state = {
    order: {
      orderall: -1,
      notravel: 2,
      nopayment: 0,
      nocomment: 3,
      canceled: 1
    },
    initialparam: {
      "endDate": "2018-04-02",
      "orderStatus": -1,
      "orderType": -1,
      "pageNo": 1,
      "pageSize": 5,
      "startDate": "2016-06-02"
    },
    param: {}
  }
  constructor(props) {
    super(props);
    // 父页面传递的数据 
    this.state = {
      orderTypeIndex: this.props.dataType,
       handleSearch: (searchparam) => {
        console.log("searchparam=" + JSON.stringify(searchparam))
        this.setState({
          param: searchparam
        })
        console.log("searchparam22=" + JSON.stringify(this.state.param))

      }
    }
    console.log("this.state.orderTye==" + this.state.orderTypeIndex);
  }

  componentWillMount() {
    fetchBiz({
      url: "/hotelorder/getpersonalorderlist",
      type: "POST",
      param: this.state.initialparam,
      callback: e => {
        //得到后台的请求数据
        console.log("连接价格==" + JSON.stringify(e.data));
      }
    })

    this.setState({
      "data": {
        "beginPos": 0,
        "curPage": 1,
        "pageCount": 60,
        "pageSize": 1,
        "rows": [
          {
            "checkInDate": "2017-01-01",
            "creationDate": "2017-05-27",
            "hotelId": 1,
            "hotelName": "北京首都大酒店",
            "id": 80,
            "linkUserName": "张三,张四",
            "orderNo": "D100000120170527150945269270",
            "orderStatus": 0,
            "orderType": 0,
            "payAmount": 1884
          }
        ],
        "total": 60
      }
    })

  }



  render() {
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="全部订单" key="-1">
            <SearchOrder searchData={this.state.handleSearch} />
            <OrderListItem data={this.state.data} param={{ "orderStatus": -1, "orderType": -1, "pageSize": 6, "pageNo": 1 }} paramMenu={{ "orderStatus": -1, "orderType": this.state.orderTypeIndex, "pageSize": 6, "pageNo": 1 }} searchparam={this.state.param} />
          </TabPane>
          <TabPane tab="未出行" key="2">
            <OrderListItem data={this.state.data} param={{ "orderStatus": 2, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="待付款" key="0">
            <OrderListItem data={this.state.data} param={{ "orderStatus": 0, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="待评价" key="3">
            <OrderListItem data={this.state.data} param={{ "orderStatus": 3, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
          <TabPane tab="已取消" key="1">
            <OrderListItem data={this.state.data} param={{ "orderStatus": 1, "orderType": -1, "pageSize": 6, "pageNo": 1 }} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
