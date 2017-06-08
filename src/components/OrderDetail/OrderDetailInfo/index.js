import React from 'react'
import { Row, Col, Button } from 'antd';
import { fetchBiz, getUrlParam } from 'components/fetchUtils'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'

import './style.css'
//订单详细信息头部组件
export default class OrderDetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetail: [],
    }
  }
  componentWillMount() {
    //获取订单id
    let orderId = getUrlParam("orderId");

    fetchBiz({
      url: "/hotelorder/getpersonalorderinfo/" + orderId,
      callback: (e) => {
        //得到后台的请求数据
        if (e.data) {
          //转换订单状态标识码为相应的文字介绍
          if (e.data.orderStatus == 1) {
            e.data.orderStatus = "订单提交";
          } else if (e.data.orderStatus == 2) {
            e.data.orderStatus = "未出行";
          } else if (e.data.orderStatus == 3) {
            e.data.orderStatus = "支付成功";
          } else if (e.data.orderStatus == 4) {
            e.data.orderStatus = "入住";
          } else if (e.data.orderStatus == 5) {
            e.data.orderStatus = "订单点评";
          }
          //转换订单类型标识码为相应的文字{"1":"在线付","2":"线下付","3":"不限"}
          if (e.data.roomPayType == 1) {
            e.data.roomPayType = "在线付";
          } else if (e.data.roomPayType == 2) {
            e.data.roomPayType = "线下付";
          } else if (e.data.roomPayType == 3) {
            e.data.roomPayType = "不限";
          }
        }
        let arr = [];
        arr.push(e.data);
        this.setState({
          orderDetail: arr
        })
        // console.log("orderId=" + JSON.stringify(this.state.orderDetail));
        // console.log("orderId=" +this.state.orderDetail);
      }
    })

  }
  //再次预订
  againBook = () => {
    /*//获取订单id
    let orderId = getUrlParam("orderId");
    // 跳转到酒店详情页面
    const query = stringify({
      orderId: record.id
    })
    hashHistory.push('/orderdetail?' + query);*/
  }
  //我要点评
  toComment = () => {

  }
  render() {
    if (!this.state.orderDetail) return;
    return (
      <div className="orderdetailinfo">
        <Row>
          <Col span={24}>
            <h4 className="detailTile">
              订单详情
            </h4>
          </Col>
        </Row>
        <Row>
          {
            this.state.orderDetail.map(function (val, i, array) {
              return (
                <span>
                  <Col span={8}>
                    <p><span className="orderDetailname">订单号</span>{val.orderNo}</p>
                    <p><span className="orderDetailname">预订日期</span>{val.creationDate}</p>
                    <p><span className="orderDetailname">支付方式</span>{val.roomPayType}</p>
                    <p><span className="orderDetailname">订单状态</span>{val.orderStatus}</p>
                  </Col>
                  <Col span={12}>
                    <div className="detailPrice">￥ <strong>{val.payAmount}</strong> 起</div>
                    <span className="detailTip">已包含税费服务费</span>
                    <span className="detailTip">不包含城市建设费</span>
                  </Col>
                </span>
              )

            })
          } {/**/}
          <Col span={4} className="detailButton">
            <p>您可以</p>
            <Button type="primary" onClick={this.againBook.bind(this)}>再次预定</Button>
            <br />
            <Button type="primary" onClick={this.toComment.bind(this)}>我要点评</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

