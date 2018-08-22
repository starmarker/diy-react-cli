import { Layout, Menu, Breadcrumb } from 'antd';
import React from "react";
const { Header, Content, Footer } = Layout;
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Hello from './Hello/HelloWorld'
import '@/assets/less/index.less';
const Element=(props)=>(
  <Hello name={props.name}></Hello>
)
 const App =()=>(
   <Router>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about">内容</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/content">内容2</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
         <Route path="/" exact component={()=>(<Element name="首页"></Element>)}></Route>
         <Route path="/about"  component={()=>(<Element name="关于"></Element>)}></Route>
         <Route path="/content"  component={()=>(<Element name="内容"></Element>)}></Route>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Router>);
  export default App;
