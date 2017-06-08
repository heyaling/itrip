import React from 'react'
import {  Layout } from 'antd'
const { Sider, Content } = Layout
import Commentimg from './images/comment_img180180.jpg'
import StarComment from 'components/CommentPage/StarComment'
import TotalComment from 'components/CommentPage/TotalComment'
import CommentContent from 'components/CommentPage/CommentContent'
import PicUpload from 'components/CommentPage/PicUpload'
import CommentHolType from 'components/CommentPage/CommentHolType'

import './style.css'

//评论页面 调用组件情况
export default class CommentPage extends React.Component {
  render() {
        return (
            <div className="commentpage">
            {/*酒店圖片*/}
              <Layout style={{ height: 220, textAlign: 'center', marginBottom:20 }}>
                <Sider style={{ background: '#fff', padding: 20 }}>
                  <img src={Commentimg} alt=""/>
                </Sider>
                <Content>
                  <h3 className="commentHotelName">三亚喜来登度假酒店</h3>
                  <div className="diamondWrap">
                    <i className="fa fa-diamond" />
                    <i className="fa fa-diamond" />
                    <i className="fa fa-diamond" />
                    <i className="fa fa-diamond" />
                    <i className="fa fa-diamond" />
                  </div>
                </Content>
              </Layout>
            {/*总体评价*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>总体评价</Sider>
                <Content style={{padding:'20px' }}>
                  <div className="totalCommentLeft">
                    <StarComment />
                  </div>
                  <div className="totalCommentRight">
                    <TotalComment />
                  </div>
                </Content>
              </Layout>
            {/*点评内容*/}
              <Layout style={{ height: 240, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>点评内容</Sider>
                <Content style={{padding:'20px' }}>
                  <CommentContent />
                </Content>
              </Layout>
            {/*上传图片*/}
              <Layout style={{ height: 270, textAlign: 'center', marginBottom:10 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>上传图片（选填）</Sider>
                <Content style={{padding:'20px' }}>
                  <PicUpload />
                </Content>
              </Layout>
            {/*优点不足（选填）*/}
              <Layout style={{ height: 260, textAlign: 'center', marginBottom:30 }}>
                <Sider style={{ background: '#fff', padding: 35,borderRight:'2px dashed #ccc' }}>酒店类型</Sider>
                <Content style={{padding:'20px' }}>
                  <CommentHolType />
                </Content>
              </Layout>
            {/*提交按鈕*/} 
             <button className="commentBtn">发表点评</button> 
            </div>
        )
  }
}
