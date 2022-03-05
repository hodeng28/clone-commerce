import { useEffect, useState } from 'react';

import axios from 'axios';
import './Style/GoodsDetail.scss';

interface GoodsType {
  catagory: number,
  goodsNumber: number
  name: string,
  price: number,
  sale: number,
  rate: number,
  img: string
}

const GoodsDetail: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<GoodsType[]>([]);

    useEffect(() => {
      axios.get(`http://localhost:3000/goods/`).then((res) => {
        setData(res.data);
      
        setIsLoading(false);
      });
    }, []);

    if (isLoading) {
      return <h2>loading</h2>
    };

  return (
    <>
      <div className="goods-detail-container">
        <ul>
          {data.map((item) => (
            <li key={`item${item.goodsNumber}`}>{item.goodsNumber}</li>
          ))}
        
        </ul>
        </div>
    </>
  )
};

export default GoodsDetail;
