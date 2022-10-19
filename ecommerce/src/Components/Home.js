import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProducts";
import Filters from "./Filters";
import "./styles.css";



const Home = () => {
  const{ 
    state: {products},
  } = CartState();
  
  console.log(products);

  return (
    <div className="home">
      
       <Filters/>
      <div className="productContainer">
        { products.map(( products ) => {
          return <SingleProduct products={ products} key={products.id}/>
        })}
      </div>
    </div>
  );
};

export default Home