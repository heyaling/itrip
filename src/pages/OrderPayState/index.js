import React from 'react'
import {  Icon,Tabs, Layout,  Button } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import './index.css';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      state:true,
      icon:'check-circle',//close-circle  失败的按钮样式
      color:'#00cc33'
    };

  } 
  render() {
    return (
      <div className="order state-message" style={{ width: 1000 }} >
         <Layout style={{height:200,margin:30}}>
           <Layout.Sider style={{background:'#fff'}}>
             <Icon type={this.state.icon} style={{fontSize:50,margin:20,color:this.state.color,float:'right'}}></Icon>
           </Layout.Sider>
           <Layout.Content style={{background:'#fff',fontSize:14,color:'#b3b3b3'}}>
             <div className="state-div" style={{fontSize:24,marginTop:20,color:'#000'}}>
               您的预定已成功！
             </div>
             <div className="state-div" >
               <span>订单号：</span>
               <strong >00990909090909800999</strong>|
               <a style={{color:'#1448ad'}}>  查看订单  </a>
               <Icon type="heart"></Icon>
               <a style={{color:'#1448ad'}}> 加入收藏</a>
             </div>
             <div className="state-div" >
               <span>总价：</span><strong style={{color:'#ff4401'}}>1087</strong> 元  酒店前台付款
             </div>
             <div className="state-div" >请确保您的手机号码填写正确，无效手机号可能会导致订单取消或异常。</div>
             <div className="state-line"  >
               其他操作： <a>新增订单  </a><a> 复制订单</a><a>   修改入住信息 </a><a>  取消订单 </a><a>  订单操作注意事项</a>
               </div> 
           </Layout.Content>
         </Layout>
      </div >
    )
  }
}
