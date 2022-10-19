import { Card } from "react-bootstrap";

const SingleProduct = ({ products }) => {
    return  <div className="products">

        <Card> 
            <Card.img variant="top" src={products.image} alt={products.name}/>
        </Card>

    </div>
};
export default SingleProduct;