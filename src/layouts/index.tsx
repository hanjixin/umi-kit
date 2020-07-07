import React from 'react';
import { Link } from 'umi';
import { Layout } from 'antd';
// import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function LayoutContainer(props: any) {
  console.log(props);
  return (
    <Layout>
      <Header>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
          <li>aa</li>
        </ul>
      </Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutContainer;
