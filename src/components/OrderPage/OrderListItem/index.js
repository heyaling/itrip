import React from 'react'
import { Table, Pagination } from 'antd';
import { fetchBiz, fetchSearch } from 'components/fetchUtils'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'
import './style.css'

//点击进入详情页
/*const changeDetail = (e) => {
    console.log(e);
  }*/


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
  render: (text, record) => <span>
    <i className="orderState">{text}</i>
    <div className="orderdesc">
      <a id={record.id} href="javascript:;" >订单详情</a>
      {/*<Button onCellClick={this.changeDetail.bind(this)} value="isOkCount">订单详情</Button>*/}
    </div>
  </span>,
  onCellClick: (record) => {
    // 根据订单Id跳转到详情页面
    console.log(record.id)
    // 跳转页面
    const query = stringify({
      orderId: record.id
    })
    hashHistory.push('/orderdetail?' + query);

  },
}, {
  title: '操作',
  dataIndex: 'operate',
  render: text => <span>
    <a href="#">{text}</a>
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
      //paramMenu: this.props.paramMenu,
      //搜索参数
      //searchparam: this.props.searchparam
    };

  }
  //当组件传入的 props 发生变化时调用，例如：父组件状态改变，
  //给子组件传入了新的prop值。用于组件 props 变化后，更新state。
  componentWillReceiveProps(nextProps) {
    const paramMenu = nextProps.paramMenu;
    const searchparam = nextProps.searchparam;
    // 判断是搜索属性的变化还是左menu的变化，根据不同的变化，去请求数据
    if (JSON.stringify(nextProps.paramMenu) !== JSON.stringify(this.props.paramMenu)) {
      this.setState({
        param: nextProps.paramMenu
      });

    } else if (JSON.stringify(nextProps.searchparam) !== JSON.stringify(this.props.searchparam)) {
      this.setState({
        param: nextProps.searchparam
      });

    }
    //外部属性发生变化的时候，调用请求后台数据函数
    this.getPageData();
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
        if (e.data) {
          for (var i = 0; i < e.data.rows.length; i++) {
            //转换订单状态标识码为相应的文字介绍
            if (e.data.rows[i].orderStatus == 1) {
              e.data.rows[i].orderStatus = "已取消";
              e.data.rows[i]["operate"] = " ";
            } else if (e.data.rows[i].orderStatus == 0) {
              e.data.rows[i].orderStatus = "待付款";
              e.data.rows[i]["operate"] = "继续提交";
            } else if (e.data.rows[i].orderStatus == 2) {
              e.data.rows[i].orderStatus = "未出行";
            } else if (e.data.rows[i].orderStatus == 3) {
              e.data.rows[i].orderStatus = "已成交";
              e.data.rows[i]["operate"] = "点评酒店";
            }

            //转换订单类型标识码为相应的文字介绍0:旅游订单 1:酒店订单 2：机票订单
            if (e.data.rows[i].orderType == 0) {
              e.data.rows[i].orderType = "旅游";
              e.data.rows[i]["operate"] = " ";
            } else if (e.data.rows[i].orderType == 1) {
              e.data.rows[i].orderType = "酒店";
            } else if (e.data.rows[i].orderType == 2) {
              e.data.rows[i].orderType = "机票";
              e.data.rows[i]["operate"] = " ";
            }
          }
        }

        //根据请求的后台数据改变状态值
        this.setState({
          orderlist: e.data
        })
      }
    })

  }

  //耗时操作放在这里面
  componentWillMount() {
    //search参数改变param值
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
        <Pagination style={{ float: 'right', marginTop: '20px' }} pageSize={this.state.param.pageSize} onChange={this.handlClickPager}
          defaultCurrent={1} current={this.state.orderlist.curPage} total={this.state.orderlist.total} />
      </div>
    );
  }



}