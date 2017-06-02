import React from 'react'
import { Table, Button, Pagination } from 'antd';
import { fetchBiz, fetchSearch } from 'components/fetchUtils'
import './style.css'

/*订单列表组件*/
const columns = [{
  title: '全选',
  dataIndex: 'orderNo',
  render: (text, record) => <span>
    订单号:<i className="selectNum">{text}</i>
    <div className="orderHotelName"><a href="#">{record.hotelName}</a></div>
  </span>,
}, {
  title: '类型',
  dataIndex: 'checkInDate',
  filters: [
    { text: '酒店', value: 'jiuDian' },
    { text: '火车票', value: 'guoNeiHuoChePiao' },
    { text: '门票', value: 'menPiao' },
    { text: '汽车票', value: 'qiChePiao' },
  ],
  render: (text, record) => <span>
    预订日期:<i className="reserveDate">{text}</i>
    <div className="ordertype"><a href="#">{record.orderType}</a></div>
  </span>,
}, {
  title: '旅客',
  dataIndex: 'linkUserName',
}, {
  title: '行程/有效日期',
  dataIndex: 'creationDate',
}, {
  title: '总金额',
  dataIndex: 'payAmount',
  render: text => <span>
    <i className="orderTotal">￥{text}</i>
  </span>,
}, {
  title: '订单状态',
  dataIndex: 'orderStatus',
  filters: [
    { text: '待支付', value: 'daiZhiFu' },
    { text: '已取消', value: 'yiQueXiao' },
    { text: '支付成功', value: 'zhiFuChengGong' },
    { text: '已消费', value: 'yiXiaoFei' },
  ],
  render: text => <span>
    <i className="orderState">{text}</i>
    <div className="orderdesc"><a href="#">订单详情</a></div>
  </span>,
}, {
  title: '操作',
  dataIndex: 'operate',
  render: text => <span>
    <Button type="primary">再次预订</Button>
  </span>,
}
];

/*"checkInDate": "2017-01-01",
"creationDate": "2017-05-27",
"hotelId": 1,
"hotelName": "北京首都大酒店",
"id": 80,
"linkUserName": "张三,张四",
"orderNo": "D100000120170527150945269270",
"orderStatus": 1,
"orderType": 0,
"payAmount": 1884*/


export default class OrderListItem extends React.Component {

  constructor(props) {
    super(props);
    // 父页面传递的数据 
    this.state = {
      selectedRowKeys: [],  // Check here to configure the default column
      //Tab导航参数
      orderlist: this.props.data,
      param: this.props.param,
      //侧导航参数
      paramMenu: this.props.paramMenu,
      //搜索参数
      searchparam:this.props.searchparam
    };
   console.log ("Menu=="+JSON.stringify(this.state.paramMenu))
   console.log ("searchparam=="+JSON.stringify(this.state.searchparam))
  }
  // 分页函数
  handlClickPager = (e) => {
    let param = this.state.param;
    param.pageNo = e;
    this.setState({
      param: param
    })
    this.getPageData();
  }

  // 后台请求数据的函数
  getPageData = (e) => {

    fetchBiz({
      url: "/hotelorder/getpersonalorderlist",
      type: "POST",
      param: this.state.param,
      callback: e => {
        //得到后台的请求数据
        //console.log("连接价格2222==" + JSON.stringify(e.data));
        //根据请求的后台数据改变状态值
        this.setState({
          orderlist: e.data
        })
        /*let status = JSON.stringify(this.state.orderlist.rows);
        if( status== 1){
          this.setState({
            status:'已取消',
          })
        }*/
       /*let res = this.state.orderlist.rows.map=(value, index)=> {
        if(value.orderStatus == "1"){
          value.orderStatus == '已取消'
        }
       }
       let status2 = JSON.stringify(res);
       console.log("改变状态=" + JSON.stringify(status2));*/
        /*全部订单（orderStatus：-1）
          未出行（orderStatus：2）
          待付款（orderStatus：0）
          待评论（orderStatus：3）
          已取消（orderStatus：1）*/
      }
    })
  }

 //耗时操作放在这里面
  componentWillMount() {
    /*console.log("父组件传子组件递数据==" + JSON.stringify(this.state.orderlist));
    console.log("父组件传子组件参数==" + JSON.stringify(this.state.param));*/

    this.getPageData();

  }

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
      <div className="OrderListItemcc">
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.orderlist.rows} pagination={false} />
        <Pagination style={{ float: 'right',marginTop: '20px' }} pageSize={this.state.param.pageSize} onChange={this.handlClickPager}
          defaultCurrent={1} current={this.state.orderlist.curPage} total={this.state.orderlist.total} />
      </div>
    );
  }
}
