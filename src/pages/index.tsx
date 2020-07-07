import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

console.log(process.env);
export default () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>index</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
