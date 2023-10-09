const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const productsController = require('../controllers/products')


const adminData = require('./admin');

const router = express.Router();

router.use;


router.get('/', productsController.getShopData);

module.exports = router;
