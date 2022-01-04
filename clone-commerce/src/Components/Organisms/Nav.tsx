import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <>
    <nav className="nav-wrap">
      <h1 className="mainLogo">
      <Link to="/">
        문고리 로고.
      </Link>
    </h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/GoodsPage">베스트</Link>
        </li>
        <li>
          <Link to="/Mypage">추천</Link>
        </li>
        <li>
          <Link to="/Mypage">테마</Link>
        </li>
        <li>
          <Link to="/Mypage">기획전</Link>
        </li>
        <li>
          <Link to="/Mypage">이벤트</Link>
        </li>
      </ul>
    </nav>
  </>
    
  );

export default Nav;