const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');
const productsController = require('../controllers/products')
const router = express.Router();

router.use;


//HTTP GET REQUEST => /admin/add
router.get('/add-product', productsController.getAddProduct);

//Filters only for post requests
//HTTP POST REQUEST => /admin/product
router.post('/add-product', productsController.postAddProduct);


module.exports = router;
