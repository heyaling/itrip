import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
import MyInfoSearch from 'components/MyInfo/MyInfoSearch'
import MyInfoTable from 'components/MyInfo/MyInfoTable'

import './style.css'


/*我的信息页的主体框架*/
export default class MyInfoLayout extends React.Component {
  render() {
        return (
              <div className="orderpagelayout myinfocc">
                   <Layout style={{margin: '20px 0 40px 0'}}>
                      <Layout>
                      <Sider width={200} style={{ background: '#fff', border: '1px solid #ccc' }}>
                          <Menu
                          mode="inline"
                          defaultSelectedKeys={['5']}
                          defaultOpenKeys={['sub2']}
                          style={{ height: '100%' }}
                          >
                          <h3 className="order-title">我的i旅行首页</h3>
                          <SubMenu key="sub1" title={<span><Icon type="tag-o" />订单</span>}>
                              <Menu.Item key="1">全部订单</Menu.Item>
                              <Menu.Item key="2">酒店订单</Menu.Item>
                              <Menu.Item key="3">旅游订单</Menu.Item>
                              <Menu.Item key="4">机票订单</Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub2" title={<span><Icon type="user" />个人中心</span>}>
                              <Menu.Item key="5">常用旅客信息</Menu.Item>
                          </SubMenu>
                          </Menu>
                      </Sider>
                      <Layout style={{ padding: '0 24px 24px' }}>
                          <Breadcrumb>
                              <h4 className="detailTile">
                                  常用旅客信息
                              </h4>
                          </Breadcrumb>
                          <Content style={{ margin: 0, minHeight: 280 }}>
                              <MyInfoSearch />
                              <MyInfoTable />
                          </Content>
                      </Layout>
                      </Layout>
                  </Layout>
              </div>

            )
  }
}





