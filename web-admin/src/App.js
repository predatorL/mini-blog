import React from 'react';

import { HashRouter as Router, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Routes from './routes';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (

    <Layout className="layout">
      <Router>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"> <Link to="/post">post</Link></Menu.Item>
            <Menu.Item key="3"> <Link to="/channel">channel</Link></Menu.Item>
            <Menu.Item key="4"> <Link to="/config">config</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </Content>
        <Footer >©2018 Created by lhy</Footer>
      </Router>

    </Layout>
  );
}

export default App;
