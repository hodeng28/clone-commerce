import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Goods.scss';

interface GoodsType {
  catagory: number,
  goodsNumber: number
  name: string,
  price: number,
  sale: number,
  rate: number,
}

const goodsList: GoodsType[] = [
  {
    catagory: 1,
    goodsNumber: 13,
    name: "[국민손잡이］방문손잡이 ATL-711(4컬러)",
    price: 30000,
    sale: 15,
    rate: 4.8
  },
  {
    catagory: 1,
    goodsNumber: 300,
    name: "목재재단 삼나무 집성목 12T 절단목재(원하는 사이즈로 맞춤재단)",
    price: 23000,
    sale: 40,
    rate: 3
  },
]

const Goods: React.FC = () => (
  <>
    <ul className="goods-wrap">
      {goodsList.map(item =>
        <li key={item.goodsNumber}>
          <Link to="/GoodsDetail">
            <div className="goods-figure">
                <img 
                    alt={item.name}
                    src="//file.moongori.com/firstmall/data/goods/1/93703/2021/04/tmp_809ef1f29800983c526ed0548febc6da3015list1.jpg" 
                />
            </div>
            <div className="goods-inform">
              <div className="goods-title">
                <span>{item.name}</span>
              </div>
              <div className="goods-price">
                <span className="sale">
                  <span>{item.sale}</span>
                  <span>%</span>
                </span>
                <span className="price">
                  <span>{item.price}</span>
                  <span>원</span>
                </span>
              </div>
              <div className="goods-rating">
                  
                  {/* <span>(100)</span> */}
                </div>
              </div>
          </Link>
        </li>
      )}
    </ul>
  </>
)

export default Goods;