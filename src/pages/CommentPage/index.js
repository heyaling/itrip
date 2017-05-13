import React from 'react'
import { Icon, Layout, Input, Checkbox, Radio, Form, DatePicker, Row, Col, Button } from 'antd'
const { Sider, Content } = Layout
import Commentimg from './images/comment_img180180.jpg'

/*import OrderDetailTab from 'components/OrderDetail/OrderDetailTab'
*/import './style.css'

//评论页面 调用组件情况
export default class CommentPage extends React.Component {
  render() {
        return (
            <div className="commentpage">
            {/*酒店圖片*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:20 }}>
                <Sider style={{ background: '#fff', padding: 20 }}>
                  <img src={Commentimg} alt=""/>
                </Sider>
                <Content style={{padding:'25px' }}>
                  
                </Content>
              </Layout>
            {/*总体评价*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>总体评价</Sider>
                <Content style={{padding:'25px' }}>
                  
                </Content>
              </Layout>
            {/*点评内容*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>点评内容</Sider>
                <Content style={{padding:'25px' }}>
                  
                </Content>
              </Layout>
            {/*上传图片*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>上传图片（选填）</Sider>
                <Content style={{padding:'25px' }}>
                  
                </Content>
              </Layout>
            {/*优点不足（选填）*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:30 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>优点不足（选填）</Sider>
                <Content style={{padding:'25px' }}>
                  
                </Content>
              </Layout>
            {/*提交按鈕*/} 
             <button className="commentBtn">发表点评</button> 
            </div>
        )
  }
}
