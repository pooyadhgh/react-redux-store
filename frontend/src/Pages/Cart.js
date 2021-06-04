import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
  ListGroupItem,
  Alert,
} from 'react-bootstrap';

import { addTocart, removeFromCart } from '../actions/cartAction';

const Cart = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId));
    }
  }, [dispatch, productId]);

  const removeProductHandler = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2 className="my-5">Cart</h2>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Alert variant="info">The Cart Is empty</Alert>
          ) : (
            <ListGroup variant="flush" className="my-auto">
              {cartItems.map(item => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3} className="my-auto">
                      {item.name}
                    </Col>
                    <Col md={2} className="my-auto">
                      $ {item.price}
                    </Col>
                    <Col md={2} className="my-auto">
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeProductHandler(item.product)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h5>Total Price:</h5> $
                {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </ListGroupItem>
              <Button type="button">Checkout</Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
