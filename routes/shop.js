const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const productsController = require('../controllers/products');
const shopController = require('../controllers/shopController');


const adminData = require('./admin');

const router = express.Router();

router.use;


router.get('/', productsController.getShopData);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/index', shopController.getIndex);
router.get('/product-details', shopController.getProductDetails);

module.exports = router;
