import React from 'react'
import { Table, Button } from 'antd';
import './style.css'

/*订单列表组件*/

const columns = [{
  title: '全选',
  dataIndex: 'selectAll',
   render: text => <span>
   订单号:<i className="selectNum">{text}</i>
    <div className="orderHotelName"><a href="#">三亚喜来登度假酒店</a></div>
   </span>,
}, {
  title: '类型',
  dataIndex: 'type',
  filters: [
    { text: '酒店', value: 'jiuDian' },
    { text: '火车票', value: 'guoNeiHuoChePiao' },
    { text: '门票', value: 'menPiao' },
    { text: '汽车票', value: 'qiChePiao' },
  ],
  render: text => <span>
   预订日期:<i className="reserveDate">{text}</i>
    <div className="ordertype"><a href="#">酒店</a></div>
   </span>,
},{
  title: '旅客',
  dataIndex: 'traveller',
},{
  title: '行程/有效日期',
  dataIndex: 'date',
},{
  title: '总金额',
  dataIndex: 'total',
  render: text => <span>
    <i className="orderTotal">￥{text}</i>
   </span>,
},{
  title: '订单状态',
  dataIndex: 'orderState',
  filters: [
    { text: '已确认', value: 'yiQueRen' },
    { text: '未提交', value: 'weiTiJiao' },
    { text: '取消', value: 'quXiao' },
    { text: '预订成功', value: 'yuDingChengGong' },
  ],
  render: text => <span>
    <i className="orderState">{text}</i>
    <div className="orderdesc"><a href="#">订单详情</a></div>
   </span>,
}, {
  title: '操作',
  dataIndex: 'operate',
  render: text => <span>
    <Button type="primary">{text}</Button>
   </span>,
}
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    selectAll: `36273847385`,
    type: '2017-7-9',
    traveller: `王慧君`,
    date: `2017-12-13`,
    total: `660`,
    orderState: `已确认`,
    operate: `确认收货`,
  });
}

export default class OrderListItem extends React.Component {
  state = {
    selectedRowKeys: [3],  // Check here to configure the default column
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelection: this.onSelection,
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}
