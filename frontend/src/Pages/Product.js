import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import products from '../products';

const Product = ({ match }) => {
  const product = products.find(item => {
    return item._id === match.params.id;
  });

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Return
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>

        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>$ {product.price}</ListGroup.Item>
            <ListGroup.Item className="my-5 text-center">
              <Button size="lg" className="btn-block" type="button">
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
