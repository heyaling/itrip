import React from 'react'
import { Icon, Layout, Input, Checkbox, Radio, Form, DatePicker, Row, Col, Button } from 'antd'
const { Sider, Content } = Layout

/*import OrderDetailTab from 'components/OrderDetail/OrderDetailTab'
*/import './style.css'

//评论页面 调用组件情况
export default class CommentPage extends React.Component {
  render() {
        return (
            <div className="commentpage">
            {/*酒店圖片*/}
              <Layout style={{ height: 240, textAlign: 'center', borderBottom: 0, marginBottom:20 }}>
                <Sider style={{ background: '#fff', padding: 20, }}>订单信息</Sider>
                <Content style={{ background: '#f2fcff' }}>
                  
                </Content>
              </Layout>
            {/*总体评价*/}
              <Layout style={{ height: 240, textAlign: 'center', borderBottom: 0, marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 20, }}>总体评价</Sider>
                <Content style={{ background: '#f2fcff' }}>
                  
                </Content>
              </Layout>
            {/*点评内容*/}
              <Layout style={{ height: 240, textAlign: 'center', borderBottom: 0, marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 20, }}>点评内容</Sider>
                <Content style={{ background: '#f2fcff' }}>
                  
                </Content>
              </Layout>
            {/*上传图片*/}
              <Layout style={{ height: 240, textAlign: 'center', borderBottom: 0, marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 20, }}>上传图片（选填）</Sider>
                <Content style={{ background: '#f2fcff' }}>
                  
                </Content>
              </Layout>
            {/*优点不足（选填）*/}
              <Layout style={{ height: 240, textAlign: 'center', borderBottom: 0, marginBottom:30 }}>
                <Sider style={{ background: '#fff', padding: 20, }}>优点不足（选填）</Sider>
                <Content style={{ background: '#f2fcff' }}>
                  
                </Content>
              </Layout>
            {/*提交按鈕*/} 
             <button className="commentBtn">发表点评</button> 
            </div>
        )
  }
}
