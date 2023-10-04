const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');


const router = express.Router();

router.use;

module.exports = router;

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});