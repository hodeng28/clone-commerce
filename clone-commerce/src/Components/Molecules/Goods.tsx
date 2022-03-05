import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
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

const Goods: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<GoodsType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/goods').then((res) => {
      setData(res.data);
    
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>loading</h2>
  };

  return (
    <>
      <ul className="goods-wrap">
      {data.map(item =>
          <li key={item.goodsNumber}>
            <Link to={`goodsDetailPage/${ item.goodsNumber }`}>
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
}

export default Goods;