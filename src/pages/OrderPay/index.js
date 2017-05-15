import React from 'react'
import {  Icon,Tabs, Layout,  Button } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer/'
import './index.css';
import onlineZf from '../../common/images/icon/payzhifubao.png'
import offline from '../../common/images/icon/offonline.png'
const { Sider, Content } = Layout; 
const TabPane = Tabs.TabPane; 
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      hideOrShow: 'none',
      btnMs: '订单概要',
      btnIcon: 'down'

    };

  }
  hideOrShowMessage(e) {
    let dom = e.currentTarget;
    this.setState({
      hideOrShow: this.state.hideOrShow == "none" ? 'block' : 'none',
      btnMs: this.state.hideOrShow == "none" ? '收齐订单详情' : '订单概要',
      btnIcon: this.state.hideOrShow == "none" ? 'up' : 'down'
    })
  }
  render() {
    return (
      <div className="order" style={{ width: 1000 }} >
        {/* <Steps current={1}  >
          <Step title="填写" />
          <Step title="支付" />
          <Step title="成功" />
        </Steps>*/}
        <Layout style={{ background: '#f2fcff', padding: 20 }}>
          <Content>
            <div style={{ width: 300, display: 'inline-block' }}>
              <span style={{ fontSize: '18', marginRight: 10 }} >订单金额</span><strong style={{ color: 'red', fontSize: '30' }}>￥1087.00</strong>
              <div style={{ margin: '20px' }}>费用明细:房费</div>
            </div>
            <div style={{ width: 500, display: 'inline-block', padding: 10 }}>
              <span style={{ fontSize: '18', marginRight: 10 }} >三亚喜来登度假酒店</span>
              <br />
              <p>海景标间（内宾）1间    入住：2017-04-29星期六    退房：2017-05-02星期二     入住3晚 ￥1087.00</p>
              {/*<strong style={{ color: 'red', fontSize: '30' }}>￥1087.00</strong>*/}
            </div>
            <Button type="dashed" style={{ border: 0, background: '#f2fcff' }} onClick={this.hideOrShowMessage.bind(this)} >
              {this.state.btnMs} <Icon type={this.state.btnIcon} /></Button>
          </Content>
          <Layout.Footer style={{ display: this.state.hideOrShow }}>i旅行会根据您的付款方式进行预授权或扣除房费，如订单不确认将解除预授权或全额退款至您的付款账户。该订单确认后不可被取消修改，若未入住将收取您全额房费
¥1087.00.</Layout.Footer>
        </Layout>
        <Layout style={{ border: '#9bddf1 1px solid',marginBottom:30 }}>
          <Layout.Header style={{ background: '#fff' }} >
            <div><span style={{ fontSize: 18 }}>需要支付：</span><strong style={{ color: 'red', fontSize: '30' }}>￥1087.00</strong></div>
          </Layout.Header>
          <Content className="payTabs">
            <Tabs type="card">
              <TabPane tab="第三方支付" key="1">
                <div className='payType'>
                  <a href=""><img src={onlineZf} alt=""/></a>
                </div>
              </TabPane>
              <TabPane tab="线下支付" key="2">
                  <div className='payType'>
                  <a href=""><img src={offline} alt=""/></a>
                </div>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
       <div className="order-button" style={{height:50,padding:10}}>
          <div style={{float:'left',display:'inline-block'}}><a href="index.html#/?orderfill"
           style={{color:'#1ab2db',fontSize:14,marginTop:3,fontWeight:900}}>&lt; 返回修改订单</a></div>
          <div style={{float:'right',display:'inline-block'}}> <Button type="danger">下一步，支付</Button></div>
          <div></div>
        </div>
      </div >
    )
  }
}
