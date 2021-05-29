import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product/Product';
import { productListAction } from '../actions/productAction';

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h1 className="my-5">Products</h1>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <Row>
          {products.map(item => {
            return (
              <Col sm={12} md={6} lg={4} key={item._id}>
                <Product product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Home;
