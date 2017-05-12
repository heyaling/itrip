import React from 'react'
import { Table } from 'antd';
import './style.css'

// 表头组件
const columns = [{
  title: '全选',
  dataIndex: 'selectAll',
}, {
  title: '类型',
  dataIndex: 'type',
},{
  title: '旅客',
  dataIndex: 'traveller',
},{
  title: '行程/有效日期',
  dataIndex: 'date',
},{
  title: '总金额',
  dataIndex: 'total',
},{
  title: '订单状态',
  dataIndex: 'orderState',
}, {
  title: '操作',
  dataIndex: 'operate',
}
];

export default class OrderListTable extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
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
      <Table rowSelection={rowSelection} columns={columns}  />
    );
  }
}
