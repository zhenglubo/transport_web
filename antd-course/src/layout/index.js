import { Component } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import Link from 'umi/link';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
            <Sider width={256} style={{ minHeight: '100vh'}}>
                <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span>用户管理</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>订单管理</span></span>}>
                    <Menu.Item key="2">全部订单</Menu.Item>
                    <Menu.Item key="3">代发订单</Menu.Item>
                    <Menu.Item key="4">处理中订单</Menu.Item>
                    <Menu.Item key="5">已完成订单</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="car" theme="filled" /><span>车队管理</span></span>}>
                    <Menu.Item key="6">货车信息</Menu.Item>
                    <Menu.Item key="7">司机信息</Menu.Item>
                </SubMenu>
                <SubMenu key="sub" title={<span><Icon type="dashboard" /><span>物流管理</span></span>}>
                    <Menu.Item key="8">物流信息</Menu.Item>
                    <Menu.Item key="9">同城信息</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="bar-chart" /><span>统计分析</span></span>}>
                    <Menu.Item key="10">每日订单统计</Menu.Item>
                    <Menu.Item key="11">订单金额统计</Menu.Item>
                    <Menu.Item key="12">结算金额统计</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="line-chart" /><span>analyse</span></span>}>
                    <Menu.Item key="13"><Link to="/analyse/aa">aa</Link></Menu.Item>
                    <Menu.Item key="14"><Link to="/analyse/bb">bb</Link></Menu.Item>
                    <Menu.Item key="15"><Link to="/analyse/cc">cc</Link></Menu.Item>
                </SubMenu>
            </Menu>
            </Sider>
            <Layout >
              <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
      }
}

export default BasicLayout;