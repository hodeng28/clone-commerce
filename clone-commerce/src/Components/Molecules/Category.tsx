import { useEffect, useState } from 'react';

import axios from 'axios';
import './Style/Category.scss';

interface CategoryType {
  title: string,
  name: string,
  totalSales: number
}

// const cateogorySort = categoryList.sort((a, b) => b.totalSales - a.totalSales);

const Category: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CategoryType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/category').then((res) => {
      setData(res.data);
    
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>loading</h2>
  };
  return (
    <>
      <div className="cateogory-wrap">
        <ul>
          {data.map(item => 
            <li className={item.title}
                key={item.title}>
              <span>{item.name}</span>
            </li>)}
        </ul>
      </div>
    </>
  );
};

export default Category;
