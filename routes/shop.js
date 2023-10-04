const express = require('express');

const router = express.Router();

router.use;

module.exports = router;

router.use('/', (req, res, next) => {
    next();
});

router.use('/', (req, res, next) => {
    res.send('<h1>Hello!</h1>');
});