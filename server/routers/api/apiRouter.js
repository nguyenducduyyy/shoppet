const express = require('express');
const router = express.Router();
const productRouter = require('./productRouter')

router.use('/products', productRouter );

module.exports = router;