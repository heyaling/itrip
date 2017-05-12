import React from 'react'
import OrderTab from 'components/OrderPage/OrderTab'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import './style.css'


/*订单页的主体框架*/
export default class OrderLayout extends React.Component {
  render() {
        return (
        <Layout style={{margin: '20px 0 40px 0'}}>
            <Layout>
            <Sider width={200} style={{ background: '#fff', border: '1px solid #ccc' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
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
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <i className="order-tip">
                        <Icon type="exclamation-circle" style={{ color: '#2d91eb',margin:'0 6px' }}/>
                        您可以在线查看近一年的订单。如需查找更久之前的订单，请致电：400-***-8886（免长话费）。
                    </i>
                </Breadcrumb>
                <Content style={{ margin: 0, minHeight: 280 }}>
                    <OrderTab />
                </Content>
            </Layout>
            </Layout>
        </Layout>

            )
  }
}





