import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product/Product';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get('http://localhost:8000/api/products/');
      setProducts(response.data);
    };

    sendRequest();
  }, []);

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
