import './Category.scss';

const Category = () => (
  <>
    <div className="cateogory-wrap">
      <ul>
        <li className="category-name handle">
          <span>손잡이</span>
          </li>
        <li className="category-name hinge">
          <span>철물·하드웨어</span>
        </li>
        <li className="category-name tool">
          <span>공구·도구</span>
        </li>
        <li className="category-name paint">
          <span>페인트·스테인</span>
        </li>
        <li className="category-name socket">
          <span>전기·스위치</span>
        </li>
      </ul>
      <ul>
        <li className="category-name lighting">
          <span>조명</span>
        </li>
        <li className="category-name faucet">
          <span>욕실용품</span>
        </li>
        <li className="category-name kitchen">
          <span>주방용품</span>
        </li>
        <li className="category-name floor">
          <span>바닥재·장판</span>
        </li>
        <li className="category-name wallpaper">
          <span>벽지</span>
        </li>
        {/* <li className="category-name">시트지</li>
        <li className="category-name">가구</li>
        <li className="category-name">캠핑용품</li>
        <li className="category-name">홈패브릭</li> */}
      </ul>
    </div>
  </>
);

export default Category;
