/*
* @Author: zhzbin
* @Date:   2017-05-08 13:40:52
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:41:49
*/
import React from 'react'
import { DatePicker, Select } from 'antd';
import { fetchBiz } from '../../components/fetchUtils'
'use strict';
/*组件示例：btn 点击切换显示按钮样式*/
class BtnsSearchList extends React.Component {
  state = {
    clName: "btn-serach-div"
  }
  serachClickButton(e) {
    this.setState(
      {
        clName: e.currentTarget.classList.length > 1 ? "btn-serach-div " : "btn-serach-div act"
      }
    )
    this.props.clickBtn();
  }
  render() {
    return (
      <div className={this.state.clName}
        onClick={this.serachClickButton.bind(this)} >{this.props.contextName} <span /><i className=" icon-ok" /></div>
    )
  }
}
class TablesTr extends React.Component {

  render() {
    let showRowState = this.props.showRow;
    let isShow = showRowState[this.props.rowId].state;
    let size = showRowState[this.props.rowId].rowSize;
    let data = this.props.data;
    return (
      <tr className={this.props.length == 0 ? "first_room" : (this.props.length < 5 ? "unexpanded" : (isShow ? "unexpanded" : "unexpanded hidden"))} expand>
        {
          this.props.length == 0 ? (
            <td id="first_room_01" data-clum={20} data-show={5} rowSpan={!isShow ? this.props.dataLength : size}>
              <div className="room_img_ms">
                <a>
                  <img src="images/img/hotelD01_0315.jpg" height={350} width={500} /></a>
                <br />
                <a> 豪华大床房 <br /><span>查看详情</span></a>
              </div>
              <div className="rom-show-image ">
                <div className="left-tran" />
                <a className="model-remove">
                  <i className=" icon-remove" />
                </a>
                <img className="big-img" src="images/img/hotelD01_0315.jpg" height={350} width={500} alt="" />
                <div className="small-img">
                  <img src="images/img/hotelD01_0315.jpg" alt="" />
                  <img src="images/img/hotelD02_0315.jpg" alt="" />
                  <img src="images/img/hotelD03_0315.jpg" alt="" />
                </div>
              </div>
            </td>) : ""
        }
        <td>
          {/*<span className="room_type_name">i旅行直营</span><span className="rom_type_label_1">代理</span>&nbsp;<span className="rom_type_label_2">礼</span>*/}
          <p className="book_percent"><span className="green">{data.name}</span></p>
        </td>
        <td>{data.type}</td>
        <td>{data.zc}</td>
        <td><span>免费</span>
        </td>
        <td><span>{data.zce}</span></td>
        <td>
          <span className="rom_unit_label"><dfn>¥</dfn><em>{data.sum}</em><span>起</span></span>
        </td>
        <td className="col7">
          <button className="room_by">预定</button>
        </td>
      </tr>


    );
  }
}

/*组件示例：btn 点击切换显示按钮样式*/
class HotelTables extends React.Component {
  state = {
    rowSize: 5,
    showRowState: [{
      //  true 为隐藏文件信息，如果为 false 则为显示文件信息
      group: 0,
      state: false,
      rowSize: 0
    }]

  }
  constructor(props) {
    super(props);
    this.clickEvop = this.clickEvop.bind(this);
  }
  initState() {
    let data = this.props.data;
    let dat = data.map(
      function (value, index, array) {
        return {
          group: index,
          state: false,
          rowSize: value.row.length
        }

      }
    )
    this.setState({
      showRowState: dat
    })
    return dat
  }
  componentWillReceiveProps() {
    console.debug(this.initState(this.props.data));
  }
  componentWillMount() {
    console.debug(this.initState(this.props.data));
  }
  //点击展开按钮时界面显示状态
  clickEvop(e) {

    /*绑定的数据有部分数据为延迟数据，需要在点击时重新调用state 的设置数据对页面进行重新渲染*/
    let rows = this.initState(this.props.data);//this.state.showRowState; //
    let rowId = parseInt(e.currentTarget.getAttribute("data-row"));
    let status = parseInt(e.currentTarget.getAttribute("data-status"));
    var sub = e.currentTarget.children
    let allExpand = document.getElementsByClassName("room_detail_fold");

    if (status == 0) {
      for (var i = 0; i < allExpand.length; i++) {
        let ele = allExpand[i];
        if (ele !== e.currentTarget) {
          ele.children[0].children[0].innerHTML = "展开全部房型";
          ele.children[0].children[1].className = "icon-chevron-down";
          ele.children[0].setAttribute("data-status", 0);
        }
      }
      rows[rowId].state = true;
      sub[0].innerHTML = "收起";
      sub[1].className = "  icon-chevron-up";
      e.currentTarget.setAttribute("data-status", 1);
    } else {
      sub[0].innerHTML = "展开全部房型";
      sub[1].className = "icon-chevron-down";
      e.currentTarget.setAttribute("data-status", 0);
      rows[rowId].state = false;
    }
    this.setState({
      showRowState: rows
    })
  }
  render() {
    // 根绝数据信息计算并生成行列组合数据信息
    let sef = this;
    let click = this.clickEvop;
    let showRowState = this.state.showRowState;
    let rowSize = this.state.rowSize;
    return (
      <div className="table-list">
        <table>
          <thead>
            <tr className="th">
              <th className="col1" style={{ paddingLeft: 10 }}>房型</th>
              <th className="col2" />
              <th className="col3">床型</th>
              <th className="col4">早餐</th>
              <th className="col5">宽带</th>
              <th className="col_policy">政策</th>
              <th className="col6">房价（含服务费）</th>
              <th className="col7">
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map(
                function (value, index, array) {
                  {/*拿到第一层的数据结构信息*/ }
                  let groupRow = ""
                  groupRow = value.row.map(
                    function (val, i, ary) {
                      return (<TablesTr data={val} rowId={index} showRow={showRowState}
                        dataLength={ary.length > rowSize ? rowSize : ary.length} length={i} />)
                    }
                  )
                  if (value.row.length > rowSize) {
                    groupRow.push(<tr className="unexpanded last_room" overf="F">
                      <td className="fold_bold_r" />
                      <td className="child_name" />
                      <td className="col3" />
                      <td className="col4" />
                      <td className="col5" />
                      <td />
                      <td className="col_policy" />
                      <td className="room_detail_fold">
                        <a data-hidedata={value.row.length - rowSize} onClick={click} data-row={index} data-status={0}>
                          <span>展开全部房型</span><i className=" icon-chevron-down" /></a>
                      </td>
                    </tr>)
                  }

                  return groupRow;
                }
              )}

          </tbody>
        </table>
      </div>
    )
  }
}

export default class HouseList extends React.Component {
  param = {
    "endDate": "2017-05-20T02:30:06.535Z",
    "hotelId": 1,
    "isBook": 0,
    "isHavingBreakfast": 0,
    "isTimelyResponse": 0,
    "roomBedTypeId": 0,
    "startDate": "2017-05-20T02:30:06.535Z"
  }
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      text: props.initialValue || 'placeholder'
    };

    // ES6 类中函数必须手动绑定
    // this.handleClick = this.handleClick.bind(this);

  }
  componentWillMount() {
    this.getData();
  }
  /*点击搜索按钮的时候可以按照入住时间和退房时间尽心数据的查询*/
  serachByTime(e) {
    console.debug("绑定点击事件触发")
  }
  getData = (data) => {
    fetchBiz({
      url: "/hotelroom/queryhotelroombyhotel",
      type: "POST",
      param: this.param,
      callback: (data) => {
        this.setState({
          data: data.data
        })
      }
    })

  }
  /*点击每个不同的按钮的时候出发时间操作*/
  serachClickButton = (data) => {
    this.getData();
  }
  render() {
    return (

      <div className="house_list" id="houseList">
        <div className="line">
          <div className="hotel_detail_item hotel_detail_clder">
            <span>入住</span>
            <DatePicker size="small" />
          </div>
          <div className="hotel_detail_item hotel_detail_clder hotel_detail_cldertwo">
            <span>退房</span>
            <DatePicker size="small" />
          </div>
          <button className="btn-serach" onClick={this.serachByTime.bind(this)}>重新搜索</button>
        </div>
        <div className="hotel_detail-sort clearfix">
          <BtnsSearchList contextName="含早餐" clickBtn={this.serachClickButton.bind(this)} />
          <BtnsSearchList contextName="立刻确认" />
          <BtnsSearchList contextName="免费取消" />
          <BtnsSearchList contextName="可预订" />
          <div className="select-group">
            <Select defaultValue="0" style={{ width: 83, height: 38 }}>
              <Option value="0" Select>床型</Option>
              <Option value="1">大床房</Option>
              <Option value="2">大床房</Option>
              <Option value="3">大床房</Option>
            </Select> &nbsp;
            <Select defaultValue="0" style={{ width: 83, height: 38 }}>
              <Option value="0" Select>支付类型</Option>
              <Option value="1">大床房</Option>
              <Option value="2">大床房</Option>
              <Option value="3">大床房</Option>
            </Select>

          </div>
        </div>
        {/*<HotelTables data={this.state.data} />*/}
      </div>
    )

  }
}
