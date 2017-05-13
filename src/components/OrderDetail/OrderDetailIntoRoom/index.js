import React from 'react'
import { Row, Col, Button } from 'antd';
import './style.css'
//订单详细信息头部组件
export default class OrderDetailIntoRoom extends React.Component {
  render() {
        return (
            <div>
                <Row>
                <Col span={24}>
                    <h4 className="detailTile">
                        入住信息
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <h5 className="intoHotelName">三亚喜来登度假酒店</h5>
                    <span className="intoMap">亚龙湾37号<a href="#">查看酒店地图</a></span>
                    <p><span className="orderDetailname">房型</span><em className="roomType">海景标间（内宾）</em></p>
                    <p><span className="orderDetailname">床型</span>双床</p>
                    <p>
                        <span className="orderDetailname">入离日期</span>
                            <div className="roomDate">
                                <span className="dateD bigNum">29</span>
                                <span className="dateYearMon">2017-04</span>
                                <span className="dateWon">星期六</span>
                            </div>
                            <span className="connect">-</span>
                            <div className="roomDate">
                                <span className="dateD bigNum">02</span>
                                <span className="dateYearMon">2017-05</span>
                                <span className="dateWon">星期二</span>
                            </div>
                    </p>
                    <p><span className="orderDetailname">间数</span>
                        <div className="roomNum">
                            <span className="bigNum">1</span>间
                        </div>
                    </p>
                    <p><span className="orderDetailname">早餐</span>无早餐</p>
                    <p><span className="orderDetailname">住客信息</span>张彬彬　王小蒙</p>
                    <p><span className="orderDetailname">到店时间</span>2017-04-29 14:00-2017-04-29 16:00</p>
                    <p><span className="orderDetailname">特殊要求</span>无</p>
                </Col>
                <Col span={8}>
                    <div className="detailPrice">￥ <strong>1087</strong> 起</div>
                    <span className="detailTip">共 <i className="totalTime">3</i> 晚</span>
                    <span className="detailTip">房费／早餐</span>   
                </Col>
                <Col span={4} className="detailButton">
                    <Button type="primary">修改入住信息</Button>
                    <br />
                    <Button type="primary">延迟到点</Button>
                </Col>
            </Row>

            </div>
            )
        }
    }

