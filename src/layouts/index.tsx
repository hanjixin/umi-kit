import React from 'react';
import { Link } from 'umi';

function Layout(props: any) {
  console.log(props);
  return (
    <div>
      <div>
        <header>
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
            <li>test</li>
            <li>aa</li>
          </ul>
        </header>
      </div>
      {props.children}
      <div>footer</div>
    </div>
  );
}
export default Layout;
