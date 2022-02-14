import './Style/GoodsDetail.scss';

const GoodsDetail: React.FC = () => (
    <>
      <div className="goods-detail-container">
        <div className="goods-images">
          <img  alt="[국민손잡이］방문손잡이 ATL-711(4컬러)" src="//file.moongori.com/firstmall/data/goods/1/93703/2021/04/tmp_809ef1f29800983c526ed0548febc6da3015list1.jpg"/>
        </div>
        <div className="goods-inform">
          <div className="goods-data">
            <div className="goods-chip">
              <span className="chip-item today-export">오늘 출발</span>
              <span className="chip-item coupon">쿠폰</span>
            </div>
            <div className="cumulative-sales">
              <span>
                100개 이상 판매
              </span>
            </div>
          </div>
          <div className="goods-title">
            <span>[국민손잡이］방문손잡이 ATL-711(4컬러)</span>
          </div>
          <div className="goods-price">
            <span className="sale">
              <span>40</span>
              <span>%</span>
            </span>
            <span className="price">
              <span>30000</span>
              <span>원</span>
            </span>
          </div>
          <div className="goods-rating">
              {/* <span>(100)</span> */}
          </div>
        </div>
        </div>
    </>
  );

export default GoodsDetail;
