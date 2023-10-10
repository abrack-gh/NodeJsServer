const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');
const shopController = require('../controllers/shopController');
const router = express.Router();

router.use;


router.get('/products', shopController.getShopData);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/index', shopController.getIndex);
router.get('/product-details', shopController.getProductDetails);
router.get('/', shopController.getShopData);

module.exports = router;
