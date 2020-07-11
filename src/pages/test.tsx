import React from 'react';
import { Table, Tag, Space } from 'antd';
import { IGetInitialProps } from 'umi';

import axios from 'axios';
import fetch from 'dva/fetch';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function NotFound(props: any) {
  console.log(props, 'test');
  return (
    <div>
      <h1>请求数据{props.data && props.data.name}</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

// IGetInitialProps
NotFound.getInitialProps = (async ctx => {
  console.log(ctx);
  ctx.isServer = false;
  return new Promise(resolve => {
    axios.get('http://127.0.0.1:3000/users/hello?name=hanjxin').then(res => {
      console.log(res.headers);
      console.log(res);
      debugger;
      resolve({
        data: res.data,
      });
    });
  });
  return Promise.resolve({
    data: {
      title: 'Hello World',
      name: '123',
    },
  });
}) as IGetInitialProps;

//   NotFound.getInitialProps.isServer = true
export default NotFound;
