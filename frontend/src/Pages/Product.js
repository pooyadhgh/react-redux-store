import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { productDetailAction } from '../actions/productAction';

const Product = ({ history, match }) => {
  const dispatch = useDispatch();

  const productDetail = useSelector(state => state.productDetail);

  const { loading, product } = productDetail;

  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`);
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Return
      </Link>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
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
                <Button
                  onClick={addToCartHandler}
                  size="lg"
                  className="btn-block"
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
