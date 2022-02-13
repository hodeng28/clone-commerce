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
  img: string
}

const goodsList: GoodsType[] = [
  {
    catagory: 1,
    goodsNumber: 13,
    name: "[국민손잡이］방문손잡이 ATL-711(4컬러)",
    price: 30000,
    sale: 15,
    rate: 4.8,
    img: "//file.moongori.com/firstmall/data/goods/1/93703/2021/04/tmp_809ef1f29800983c526ed0548febc6da3015list1.jpg"
  },
  {
    catagory: 1,
    goodsNumber: 70,
    name: "팬톤 프리미엄 수성페인트 방문&가구용 1L/4L",
    price: 15000,
    sale: 12,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/1289/108788/2021/10/tmp_aa0160f4b9e950a58c9924dc04ee8e535095view.jpg"
  },
  {
    catagory: 3,
    goodsNumber: 113,
    name: "노네임 프리미엄 변기샤워기 변기청소기",
    price: 17900,
    sale: 40,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/1/936959/2019/12/tmp_968439c0d45a951960eec6ebeb0084b52321view.jpg"
  },
  {
    catagory: 2,
    goodsNumber: 30,
    name: "신개념 무타공 접착식 욕실 스텐 선반 덮개형 휴지걸이",
    price: 18100,
    sale: 29,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/3636/1036881/2021/09/tmp_2f74751250615aa5d5b700bbe962713f6664view.jpg"
  },
  {
    catagory: 2,
    goodsNumber: 30,
    name: "문캠핑 접이식 캠핑 우드롤테이블 중/대 (89cm/117cm)",
    price: 47900,
    sale: 50,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/1/956475/2020/11/tmp_6c7e2d26590c2f5afe4e6fba2dd09afb8848view.jpg"
  },
  {
    catagory: 1,
    goodsNumber: 3,
    name: "크레용 항균 2.0 방문손잡이- 3color",
    price: 12900,
    sale: 35,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/1/1048099/2022/02/tmp_a54012e16cdeb1a6d2510da1fc5c3c971842view.jpg"
  },
  {
    catagory: 5,
    goodsNumber: 30,
    name: "[인더프레임]1단 플랜트박스 2size/3color",
    price: 17900,
    sale: 40,
    rate: 3,
    img: "//file.moongori.com/firstmall/data/goods/1/1045859/2022/01/tmp_8e119c7a3104f01c9c2796de7ed415dc3902view.jpg"
  },
]

const Goods: React.FC = () => (
  <>
    <ul className="goods-wrap">
      {goodsList.map(item =>
        <li key={item.goodsNumber}>
          <Link to={`goodsDetail/${ item.goodsNumber }`}>
            <div className="goods-figure">
                <img 
                    alt={item.name}
                    src={item.img}
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