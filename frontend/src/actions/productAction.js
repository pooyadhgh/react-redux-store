import axios from 'axios';

export const productListAction = () => async dispach => {
  try {
    dispach({ type: 'PRODUCT_LIST_REQUEST' });
    const { data } = await axios.get('http://localhost:8000/api/products/');

    dispach({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const productDetailAction = id => async dispach => {
  try {
    dispach({ type: 'PRODUCT_DETAIL_REQUEST' });
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );

    dispach({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data });
  } catch (err) {
    console.log(err);
  }
};
