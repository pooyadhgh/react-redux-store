import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>
      <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle as="div" className="text-center">
            {product.name}
          </CardTitle>
        </Link>
      </CardBody>

      <CardText as="h3" className="text-center">
        $ {product.price}
      </CardText>
    </Card>
  );
};
export default Product;
