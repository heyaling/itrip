import React from 'react'
import { Table, Input, Button, Layout } from 'antd';
import './style.css'
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import Modal from 'components/MyInfo/linkerUser/'
const { Content, Sider } = Layout;

export default class MyInfoTable extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    rows: [],
    visible: false,
    param: {
      linkUserName: ""
    },
    data: {
      title: '添加用户信息',
      url: '/userinfo/adduserlinkuser',
      type: 'add',//modfiy
      userMess: {
        userName: "",
        phone: '',
        card: ''
      }
    },
    callback: (data) => {
      fetchBiz({
        url: "/userinfo/queryuserlinkuser",
        type: "POST",
        param: {},
        callback: e => {
          this.setState({
            visible: false
          })
          this.setState({
            rows: e.data
          })
        }
      })

    },
    setState: (data) => {
      this.setState({
        visible: false
      })
    }
  };
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  componentWillMount() {
    fetchBiz({
      url: "/userinfo/queryuserlinkuser",
      type: "POST",
      param: this.state.param,
      callback: e => {
        this.setState({
          rows: e.data
        }) 
      }
    })
  }
  addLinkerUser = (e) => {
    console.debug(e);
    this.setState({
      visible: true,
      data: {
        title: '添加用户信息',
        url: '/userinfo/adduserlinkuser',
        type: 'add',//modfiy
        userMess: {
          userName: "",
          phone: '',
          card: ''
        }
      }
    })
  }
  modifyLinkerUser = (e) => {
    console.debug(e);
    this.setState({
      visible: true,
      data: {
        title: '编辑用户信息',
        url: '/userinfo/modifyuserlinkuser',
        type: 'add',//modfiy
        userMess: {
          userName: "",
          phone: '',
          card: ''
        }
      }
    })
  }
  removeLinkerUser = (e) => {


  }
  inputChange = (e) => {
    this.setState({
      param: {
        linkUserName: e.target.value
      }
    })
  }
  searchRowDatas=(e)=>{
     fetchBiz({
      url: "/userinfo/queryuserlinkuser",
      type: "POST",
      param: this.state.param,
      callback: e => {
        this.setState({
          rows: e.data
        }) 
      }
    })
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelection: this.onSelection,
    };
    const columns = [
      {
        title: '全选',
        dataIndex: 'selectAll'
      }, {
        title: '姓名',
        dataIndex: 'linkUserName'
      }, {
        title: '手机/电话',
        dataIndex: 'linkPhone',
      }, {
        title: '证件类型',
        dataIndex: 'linkIdCardType',
        render: (e) => {
          let map = { 0: '身份证', 1: '护照', 2: '学生证', 3: '军人证', 4: '驾驶证', 5: '旅行证' }
          return map[e];
        }
      }, {
        title: '证件号码',
        dataIndex: 'linkIdCard'

      }, {
        title: '操作',
        dataIndex: 'operate',
        render: text => <span>
          {/*<a onClick={this.addLinkerUser.bind(this)} style={{ color: "#1ab2db" }}>查看</a>*/}
          <a onClick={this.modifyLinkerUser.bind(this)} style={{ margin: "0 10px 0 -15px", color: "#1ab2db" }}>编辑</a>
          <a onClick={this.removeLinkerUser.bind(this)} style={{ color: "#1ab2db" }}>删除</a>
        </span>,
      }
    ];
    return (
      <Content>
        <div className="myinfosearch">
          <span>旅客姓名</span><Input onChange={this.inputChange.bind(this)} placeholder="中文名/英文名" />
          <Button style={{ marginRight: "10px" }} type="primary" onClick={this.searchRowDatas.bind(this)}>查询</Button>
          <Button style={{ marginRight: "10px" }} type="primary" onClick={this.addLinkerUser.bind(this)}>新增</Button>
          <Button type="primary" onClick={this.removeLinkerUser.bind(this)}>删除</Button>
        </div>
        <Modal data={this.state} footer={""} ></Modal>
        <div className="OrderListItemcc myinfotablecc">
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.rows} />
        </div>
      </Content>

    );
  }
}
