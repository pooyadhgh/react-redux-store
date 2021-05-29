import { Link, useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  const history = useHistory();

  const addToCartHandler = () => {
    history.push(`/cart/${product._id}`);
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="text-center">
            {product.name}
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="h3" className="text-center">
        $ {product.price}
      </Card.Text>
      <Button
        onClick={addToCartHandler}
        size="lg"
        className="btn-block text-center"
        type="button"
      >
        Add To Cart
      </Button>
    </Card>
  );
};
export default Product;
