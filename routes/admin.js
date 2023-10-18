const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');
const adminController = require('../controllers/adminController')
const router = express.Router();

router.use;


//HTTP GET REQUEST => /admin/add
router.get('/add-product', adminController.getAddProduct);

router.get('/edit-product', adminController.getEditProducts);
router.get('/shop', adminController.getShop);

//Filters only for post requests
//HTTP POST REQUEST => /admin/product
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct);



module.exports = router;
