import './Category.scss';

interface CategoryType {
  title: string,
  name: string,
  totalSales: number
}

const categoryList: CategoryType[] = [
  {
    title: "handle",
    name: "손잡이",
    totalSales: 108000000
  },
  {
    title: "hinge",
    name: "철물·하드웨어",
    totalSales: 80000
  },
  {
    title: "tool",
    name: "공구·도구",
    totalSales: 900000
  },
  {
    title: "paint",
    name: "페인트·스테인",
    totalSales: 9000000
  },
  {
    title: "socket",
    name: "전기·스위치",
    totalSales: 30000
  },
  {
    title: "lighting",
    name: "조명",
    totalSales: 0
  },
  {
    title: "faucet",
    name: "욕실용품",
    totalSales: 30200000
  },
  {
    title: "kitchen",
    name: "주방용품",
    totalSales: 620000
  },
  {
    title: "floor",
    name: "바닥재·장판",
    totalSales: 7230000
  },
  {
    title: "wallpaper",
    name: "벽지",
    totalSales: 13049000
  },
]

const cateogorySort = categoryList.sort((a, b) => b.totalSales - a.totalSales);

const favoriteCateogoryLIst = cateogorySort.map(item => 
                                  <li className={item.title}
                                      key={item.title}>
                                    <span>{item.name}</span>
                                  </li>)

const Category: React.FC = () => (
  <>
    <div className="cateogory-wrap">
      <ul>
        {favoriteCateogoryLIst}
      </ul>
    </div>
  </>
);

export default Category;
