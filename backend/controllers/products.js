const products = require('../models/products');

const getAllProducts = (req, res, next) => {
  res.json(products);
};

const getProduct = (req, res, next) => {
  const product = products.find(item => {
    return item._id === req.params.id;
  });

  res.json(product);
};

module.exports = { getAllProducts: getAllProducts, getProduct: getProduct };
