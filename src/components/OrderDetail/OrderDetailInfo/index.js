import React from 'react'
import { Row, Col, Button } from 'antd';
import './style.css'
//订单详细信息头部组件
export default class OrderDetailInfo extends React.Component {
  render() {
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
                <Col span={8}>
                    <p><span className="orderDetailname">订单号</span>345894590</p>
                    <p><span className="orderDetailname">预订日期</span>2017-04-15</p>
                    <p><span className="orderDetailname">预订方式</span>手机订单</p>
                    <p><span className="orderDetailname">支付方式</span>到店付款</p>
                    <p><span className="orderDetailname">订单状态</span>已成交</p>
                </Col>
                <Col span={12}>
                    <div className="detailPrice">￥ <strong>2699</strong> 起</div>
                    <span className="detailTip">已包含税费服务费</span>
                    <span className="detailTip">不包含城市建设费</span>   
                </Col>
                <Col span={4} className="detailButton">
                    <p>您可以</p>
                    <Button type="primary">再次预定</Button>
                    <br />
                    <Button type="primary">取消订单</Button>
                    <br />
                    <Button type="primary">我要点评</Button>
                </Col>
            </Row>

            </div>
            )
        }
    }

