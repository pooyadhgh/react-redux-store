const express = require('express');

const router = express.Router();

const productControllers = require('../controllers/products');

// /api/products
router.get('/products', productControllers.getAllProducts);

// /api/products/:id
router.get('/products/:id', productControllers.getProduct);

module.exports = router;
