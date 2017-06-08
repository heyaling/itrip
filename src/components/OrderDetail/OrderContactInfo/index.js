import React from 'react'
import { Row, Col, Button } from 'antd';
import './style.css'

//订单联系信息组件
export default class OrderContactInfo extends React.Component {
  render() {
    return (
      <div className="contactInfo">
        <Row>
          <Col span={24}>
            <h4 className="detailTile">
              联系信息
            </h4>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <p>
              <span className="contactPhone">联系手机</span>
              <span className="phoneNum">+86 185****7576</span>
            </p>
          </Col>
          <Col span={8}>
            <Button type="primary">修改联系信息</Button>
          </Col>
        </Row>
      </div>


    )
  }
}

