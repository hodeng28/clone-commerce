import Category from '../Molecules/Category';
import Goods from '../Molecules/Goods';

const MainPage: React.FC = () => (
    <>
        <div>
            <h4>오늘의 인기상품</h4>
            <Goods />
        </div>
        <div>
            <h4>즐겨찾는 카테고리</h4>
            <Category />
        </div>
    </>
);

export default MainPage;