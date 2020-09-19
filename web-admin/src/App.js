import React from 'react';

import { HashRouter as Router, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Routes from './routes';
import 'antd/dist/antd.css';

const { Sider, Header, Content } = Layout;

function App() {
  return (

    <Layout className="app-root">
      <Router>
        <Sider>
          <Menu theme="dark"  defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"> <Link to="/post">post</Link></Menu.Item>
            <Menu.Item key="3"> <Link to="/channel">channel</Link></Menu.Item>
            <Menu.Item key="4"> <Link to="/config">config</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content>
            <Switch>
              <Routes />
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Layout>
  );
}

export default App;
