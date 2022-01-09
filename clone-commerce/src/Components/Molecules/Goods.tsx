import React from 'react';
import './Goods.scss';

const Goods: React.FC = () => (
  <>
    <div className="goods-container">
      <div className="goods-area">
        <div className="goods-figure">
            <img 
                alt="손잡이"
                src="//file.moongori.com/firstmall/data/goods/1/93703/2021/04/tmp_809ef1f29800983c526ed0548febc6da3015list1.jpg" 
            />
        </div>
        <div className="goods-inform">
          <div className="goods-title">
            <span>국민손잡이］방문손잡이 ATL-711(4컬러)</span>
          </div>
          <div className="goods-price">
            <span className="sale">
              <span>30</span>
              <span>%</span>
            </span>
            <span className="price">
              <span>11,000</span>
              <span>원</span>
            </span>
          </div>
          <div className="goods-rating">
              
              {/* <span>(100)</span> */}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Goods;