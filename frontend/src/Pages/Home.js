import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product/Product';

const Home = () => {
  return (
    <div>
      <h1 className="my-5">Products</h1>
      <Row>
        {products.map(item => {
          return (
            <Col sm={12} md={6} lg={4} key={item._id}>
              <Product product={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
