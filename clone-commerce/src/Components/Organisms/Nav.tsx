import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
    <div className="nav-wrap">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/GoodsPage">상품페이지</Link>
        </li>
        <li>
          <Link to="/Mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );

export default Nav;