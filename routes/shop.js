const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');
const shopController = require('../controllers/shopController');
const router = express.Router();

router.use;


router.get('/products', shopController.getShopData);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/index', shopController.getIndex);
router.get('/', shopController.getShopData);
router.get('/orders', shopController.getOrders);

router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.post('/create-order', shopController.postCreateOrder);

module.exports = router;
