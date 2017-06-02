import React from 'react'
import { Table } from 'antd';
import './style.css'

/*订单列表组件*/
const columns = [{
  title: '全选',
  dataIndex: 'selectAll'
}, {
  title: '姓名',
  dataIndex: 'name'
},{
  title: '手机/电话',
  dataIndex: 'phonenum',
},{
  title: '证件类型',
  dataIndex: 'credtype',
},{
  title: '证件号码',
  dataIndex: 'crednum'
}, {
  title: '操作',
  dataIndex: 'operate',
  render: text => <span>
    <a href="#" style={{color:"#1ab2db"}}>查看</a>
    <a href="#" style={{margin:"0 10px",color:"#1ab2db"}}>编辑</a>
    <a href="#" style={{color:"#1ab2db"}}>删除</a>
   </span>,
}
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
   //selectAll: `36273847385`,
    phonenum: '13476890564',
    name: `王慧君`,
    credtype: `身份证`,
    crednum: `370884199908033060`,
    orderState: `已确认`,
    operate: `确认收货`,
  });
}

export default class MyInfoTable extends React.Component {
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
      <div className="OrderListItemcc myinfotablecc">
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}
